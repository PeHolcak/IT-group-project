"use client";

import { useForm } from "react-hook-form";
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

type RegistrationValues = {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
    consent: boolean;
};

type RegisterDialogProps = { onClose: () => void };

export const RegisterDialog = ({ onClose }: RegisterDialogProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        getValues,
    } = useForm<RegistrationValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            passwordConfirm: "",
            consent: false,
        },
    });

    const onSubmit = (data: RegistrationValues) => {
        console.log("register:", data);
    };

    return (
        <Dialog title="Registrace" onClose={onClose}>
            <form onSubmit={handleSubmit(onSubmit)} className={form} noValidate>
                <FormInput<RegistrationValues>
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

                <FormInput<RegistrationValues>
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

                {/* Heslo */}
                <FormInput<RegistrationValues>
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

                <FormInput<{ passwordConfirm: string }>
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
    );
};
