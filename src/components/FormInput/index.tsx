"use client";

import {
    FieldValues,
    Path,
    RegisterOptions,
    UseFormRegister,
} from "react-hook-form";
import { field, labelText, input, errorText } from "./styles";

type FormInputProps<TFieldValues extends FieldValues> = {
    name: Path<TFieldValues>;
    label: string;
    type?: string;
    autoComplete?: string;
    rules?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
    register: UseFormRegister<TFieldValues>;
    error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function FormInput<TFieldValues extends FieldValues>({
    name,
    label,
    type = "text",
    autoComplete,
    rules,
    register,
    error,
    ...rest
}: FormInputProps<TFieldValues>) {
    return (
        <div className={field}>
            <label>
                <span className={labelText}>{label}</span>
                <input
                    type={type}
                    autoComplete={autoComplete}
                    className={input}
                    {...register(name, rules)}
                    {...rest}
                />
            </label>
            {error && <p className={errorText}>{error}</p>}
        </div>
    );
}
