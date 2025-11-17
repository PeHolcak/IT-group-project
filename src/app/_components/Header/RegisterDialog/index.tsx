"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useState } from "react";
import {
    form,
    errorText,
    rememberRow,
    checkbox,
    checkboxLabel,
    actionsRow,
    submitButton,
} from "./styles";
import { Dialog } from "@/components/Dialog";
import { FormInput } from "@/components/FormInput";
import { FormStatus } from "@/components/FormStatus";
import { submitRegistration, RegistrationValues } from "./actions";

type RegisterDialogProps = { onClose: () => void };

export const RegisterDialog = ({ onClose }: RegisterDialogProps) => {
    const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        getValues,
        reset,
    } = useForm<RegistrationValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            passwordConfirm: "",
            consent: false,
        },
    });

    const onSubmit = async (data: RegistrationValues) => {
        try {
            await submitRegistration(data);
            const res = await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false,
            });
            if (res?.error) {
                setStatus({
                    type: "error",
                    message: "Registrace proběhla, ale přihlášení se nezdařilo.",
                });
                return;
            }
            reset();
            onClose();
        } catch (error) {
            console.error("register error:", error);
            setStatus({
                type: "error",
                message: "Registrace se nezdařila. Zkuste to prosím znovu.",
            });
        }
    };

    return (
        <>
            {status && (
                <FormStatus
                    type={status.type}
                    message={status.message}
                    onClose={() => setStatus(null)}
                />
            )}

            <Dialog title="Registrace" onClose={onClose}>
                <form onSubmit={handleSubmit(onSubmit)} className={form} noValidate>
                    <FormInput
                        name="name"
                        label="Jméno"
                        type="text"
                        autoComplete="name"
                        register={register}
                        error={errors.name?.message}
                        rules={{
                            required: "Jméno je povinné",
                            minLength: {
                                value: 2,
                                message: "Jméno musí mít alespoň 2 znaky",
                            },
                        }}
                    />

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
                        autoComplete="new-password"
                        register={register}
                        error={errors.password?.message}
                        rules={{
                            required: "Heslo je povinné",
                            minLength: {
                                value: 6,
                                message: "Minimálně 6 znaků",
                            },
                        }}
                    />

                    <FormInput
                        name="passwordConfirm"
                        label="Potvrzení hesla"
                        type="password"
                        autoComplete="new-password"
                        register={register}
                        error={errors.passwordConfirm?.message}
                        rules={{
                            required: "Potvrďte heslo",
                            validate: (value: string) =>
                                value === getValues("password") || "Hesla se neshodují",
                        }}
                    />

                    <div className={rememberRow}>
                        <label className={checkboxLabel}>
                            <input
                                type="checkbox"
                                className={checkbox}
                                {...register("consent", {
                                    validate: (value) =>
                                        value ||
                                        "Musíte souhlasit se zpracováním osobních údajů",
                                })}
                            />
                            Souhlasím se zpracováním osobních údajů.
                        </label>
                    </div>
                    {errors.consent && (
                        <p className={errorText}>{errors.consent.message}</p>
                    )}

                    <div className={actionsRow}>
                        <button
                            type="submit"
                            className={submitButton}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Registruji..." : "Registrovat"}
                        </button>
                    </div>
                </form>
            </Dialog>
        </>
    );
};
