"use client";

import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/Button";
import { cx, css } from "@/styled-system/css";

type ButtonLinkProps = LinkProps & {
    children: ReactNode;
    onClick?: () => void;
    variant?: "primary" | "ghost";
    fullWidth?: boolean;
    className?: string;
};

export const ButtonLink = ({
    children,
    href,
    onClick,
    variant = "primary",
    fullWidth = false,
    className,
    ...props
}: ButtonLinkProps) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={cx(
                fullWidth &&
                css({
                    display: "block",
                    width: "100%",
                }),
                className
            )}
            {...props}
        >
            <Button variant={variant} fullWidth={fullWidth}>
                {children}
            </Button>
        </Link>
    );
};
