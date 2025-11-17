"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/Button";
import {
    formCard,
    formHeading,
    form
} from "./styles";

import { FormInput } from "@/components/FormInput";
import { FormTextarea } from "@/components/FormInput/FormTextarea";

type ContactFormValues = {
    name: string;
    email: string;
    message: string;
};

export const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = (data: ContactFormValues) => {
        console.log("contact form:", data);
    };

    return (
        <div className={formCard}>
            <h2 className={formHeading}>Napište nám</h2>

            <form onSubmit={handleSubmit(onSubmit)} className={form}>
                <FormInput
                    name="name"
                    label="Jméno"
                    register={register}
                    error={errors.name?.message}
                    placeholder="Vaše jméno"
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
                    type="email"
                    label="E-mail"
                    register={register}
                    error={errors.email?.message}
                    placeholder="např. jana@example.cz"
                    rules={{
                        required: "E-mail je povinný",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Zadejte platný e-mail",
                        },
                    }}
                />

                <FormTextarea<ContactFormValues>
                    name="message"
                    label="Zpráva"
                    register={register}
                    error={errors.message?.message}
                    placeholder="Sdělte nám, s čím vám můžeme pomoct."
                    rules={{
                        required: "Zpráva je povinná",
                        minLength: {
                            value: 10,
                            message: "Zpráva musí mít alespoň 10 znaků",
                        },
                    }}
                />

                <Button variant="primary" disabled={isSubmitting}>
                    {isSubmitting ? "Odesílám..." : "Odeslat"}
                </Button>
            </form>
        </div>
    );
};
