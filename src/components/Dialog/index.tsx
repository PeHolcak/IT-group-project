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
import { PropsWithChildren } from "react";

type LoginFormValues = {
    email: string;
    password: string;
    remember: boolean;
};

type DialogProps = PropsWithChildren<{
    onClose?: () => void;
    title: string
    children: React.ReactNode;
}>;

export const Dialog = ({ onClose, title, children }: DialogProps) => {

    return (
        <div className={overlay}>
            <div className={dialog}>
                <header className={dialogHeader}>
                    <h2 className={title}>{title}</h2>
                    <button
                        type="button"
                        onClick={onClose}
                        className={closeButton}
                        aria-label="Zavřít"
                    >
                        ×
                    </button>
                </header>

                {children}
            </div>
        </div>
    );
};
