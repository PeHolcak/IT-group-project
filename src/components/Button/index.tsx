"use client"

import { ReactNode, ButtonHTMLAttributes } from "react"
import { btn, btnPrimary, btnGhost } from "./styles"
import { cx } from "@/styled-system/css"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    variant?: "primary" | "ghost"
}

export const Button = ({ children, variant = "primary", className, ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className={cx(
                btn,
                variant === "primary" ? btnPrimary : btnGhost,
                className,
            )}
        >
            {children}
        </button>
    )
}
