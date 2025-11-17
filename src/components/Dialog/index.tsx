"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import {
    overlay,
    dialog,
    dialogHeader,
    closeButton,
    title,
    form,
    field,
    labelText,
    input,
    errorText,
    rememberRow,
    checkbox,
    checkboxLabel,
    actionsRow,
    submitButton,
    forgotLink,
} from "./styles";

type LoginFormValues = {
    email: string;
    password: string;
    remember: boolean;
};

type LoginDialogProps = {
    onClose?: () => void;
};

export const LoginDialog = ({ onClose }: LoginDialogProps) => {
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

    const onSubmit = (data: LoginFormValues) => {
        console.log("login data", data);
    };

    return (
        <div className={overlay}>
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
                    <div className={field}>
                        <label>
                            <span className={labelText}>E-mail</span>
                            <input
                                type="email"
                                autoComplete="email"
                                className={input}
                                {...register("email", {
                                    required: "E-mail je povinný",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Zadejte platný e-mail",
                                    },
                                })}
                            />
                        </label>
                        {errors.email && (
                            <p className={errorText}>{errors.email.message}</p>
                        )}
                    </div>

                    <div className={field}>
                        <label>
                            <span className={labelText}>Heslo</span>
                            <input
                                type="password"
                                autoComplete="current-password"
                                className={input}
                                {...register("password", {
                                    required: "Heslo je povinné",
                                    minLength: {
                                        value: 8,
                                        message: "Heslo musí mít alespoň 8 znaků",
                                    },
                                    validate: (value) => {
                                        if (!/[A-Z]/.test(value)) {
                                            return "Heslo musí obsahovat alespoň jedno velké písmeno";
                                        }
                                        if (!/[a-z]/.test(value)) {
                                            return "Heslo musí obsahovat alespoň jedno malé písmeno";
                                        }
                                        if (!/[0-9]/.test(value)) {
                                            return "Heslo musí obsahovat alespoň jednu číslici";
                                        }
                                        if (!/[!@#$%^&*(),.?":{}|<>_\-]/.test(value)) {
                                            return "Heslo musí obsahovat alespoň jeden speciální znak";
                                        }
                                        return true;
                                    }
                                })}
                            />
                        </label>
                        {errors.password && (
                            <p className={errorText}>{errors.password.message}</p>
                        )}
                    </div>

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
