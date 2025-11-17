import { css } from "@/styled-system/css";

export const field = css({
    display: "flex",
    flexDirection: "column",
    gap: "0.35rem",
});

export const errorText = css({
    fontSize: "0.8rem",
    color: "#f97373",
});

export const input = css({
    width: "100%",
    borderRadius: "0.75rem",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#374151",
    bg: "#020617",
    color: "#f9fafb",
    px: "0.9rem",
    py: "0.7rem",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.15s ease, box-shadow 0.15s ease",
    _focusVisible: {
        borderColor: "#3fb950",
        boxShadow: "0 0 0 1px #3fb950",
    },
    _placeholder: {
        color: "#6b7280",
    },
});

export const labelText = css({
    fontSize: "0.85rem",
    color: "#d1d5db",
});
