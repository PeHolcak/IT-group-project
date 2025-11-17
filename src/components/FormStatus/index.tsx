"use client";

import { css } from "@/styled-system/css";
import { useEffect, useState } from "react";

type Props = {
    type: "success" | "error";
    message: string;
    duration?: number;
    onClose?: () => void;
};

export const FormStatus = ({ type, message, duration = 4000, onClose }: Props) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            setTimeout(() => onClose?.(), 300);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div
            className={css({
                position: "fixed",
                top: "1rem",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 9999,
                px: "1.2rem",
                py: "0.8rem",
                borderRadius: "md",
                fontWeight: 600,
                fontSize: "0.95rem",
                textAlign: "center",
                color: "white",
                bg: type === "success" ? "green.600" : "red.600",
                border: "1px solid",
                borderColor: type === "success" ? "green.700" : "red.700",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                opacity: visible ? 1 : 0,
                transition: "opacity 0.3s ease",
            })}
        >
            {message}
        </div>
    );
};
