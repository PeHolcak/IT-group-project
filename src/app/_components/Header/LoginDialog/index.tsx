"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import {
    overlay,
    dialog,
    dialogHeader,
    closeButton,
    title,
    form,
    rememberRow,
    checkbox,
    checkboxLabel,
    actionsRow,
    submitButton,
    forgotLink,
} from "./styles";

import { FormInput } from "@/components/FormInput";
import { FormStatus } from "@/components/FormStatus";

type LoginFormValues = {
    email: string;
    password: string;
    remember: boolean;
};

type LoginDialogProps = {
    onClose?: () => void;
};

export const LoginDialog = ({ onClose }: LoginDialogProps) => {
    const router = useRouter();
    const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(
        null,
    );

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormValues>({
        defaultValues: {
            email: "",
            password: "",
            remember: false,
        },
    });

    const onSubmit = async (data: LoginFormValues) => {
        setStatus(null);

        const res = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });

        if (res?.error) {
            setStatus({
                type: "error",
                message: "Neplatný e-mail nebo heslo.",
            });
            return;
        }

        // úspěch – refreshneš UI a zavřeš dialog
        router.refresh();
        if (onClose) onClose();
    };

    return (
        <div className={overlay}>
            {status && (
                <FormStatus
                    type={status.type}
                    message={status.message}
                    onClose={() => setStatus(null)}
                />
            )}

            <div className={dialog}>
                <header className={dialogHeader}>
                    <h2 className={title}>Přihlášení</h2>
                    <button
                        type="button"
                        onClick={onClose}
                        className={closeButton}
                        aria-label="Zavřít"
                    >
                        ×
                    </button>
                </header>

                <form onSubmit={handleSubmit(onSubmit)} className={form} noValidate>
                    <FormInput
                        name="email"
                        label="E-mail"
                        type="email"
                        autoComplete="email"
                        register={register}
                        error={errors.email?.message}
                        rules={{
                            required: "E-mail je povinný",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Zadejte platný e-mail",
                            },
                        }}
                    />

                    <FormInput
                        name="password"
                        label="Heslo"
                        type="password"
                        autoComplete="current-password"
                        register={register}
                        error={errors.password?.message}
                        rules={{
                            required: "Heslo je povinné",
                            minLength: {
                                value: 8,
                                message: "Heslo musí mít alespoň 8 znaků",
                            },
                            validate: (value: string) => {
                                if (!/[A-Z]/.test(value)) {
                                    return "Heslo musí obsahovat alespoň jedno velké písmeno";
                                }
                                if (!/[a-z]/.test(value)) {
                                    return "Heslo musí obsahovat alespoň jedno malé písmeno";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Heslo musí obsahovat alespoň jednu číslici";
                                }
                                if (!/[!@#$%^&*(),.?\":{}|<>_\-]/.test(value)) {
                                    return "Heslo musí obsahovat alespoň jeden speciální znak";
                                }
                                return true;
                            },
                        }}
                    />

                    <div className={rememberRow}>
                        <label className={checkboxLabel}>
                            <input
                                type="checkbox"
                                className={checkbox}
                                {...register("remember")}
                            />
                            Zapamatovat
                        </label>
                    </div>

                    <div className={actionsRow}>
                        <button
                            type="submit"
                            className={submitButton}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Přihlašuji..." : "Přihlásit se"}
                        </button>

                        <Link href="/zapomenute-heslo" className={forgotLink}>
                            Zapomenuté heslo
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
