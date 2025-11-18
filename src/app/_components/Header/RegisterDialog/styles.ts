import { css } from "@/styled-system/css";


export const dialog = css({
    width: "100%",
    maxWidth: "460px",
    bg: "#111827",
    color: "#e5e7eb",
    borderRadius: "1.25rem",
    boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
    p: "2rem",
    position: "relative",
});

export const form = css({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
});

export const errorText = css({
    fontSize: "0.8rem",
    color: "#f97373",
});

export const rememberRow = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mt: "0.5rem",
});

export const checkboxLabel = css({
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.9rem",
    color: "#e5e7eb",
    cursor: "pointer",
});

export const checkbox = css({
    width: "1rem",
    height: "1rem",
    borderRadius: "0.25rem",
    accentColor: "#22c55e",
});

export const actionsRow = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mt: "1.25rem",
});

export const submitButton = css({
    border: "none",
    borderRadius: "0.75rem",
    px: "1.6rem",
    py: "0.75rem",
    fontWeight: 600,
    fontSize: "0.95rem",
    cursor: "pointer",
    bg: "#22c55e",
    color: "#020617",
    transition: "transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease",
    _hover: {
        bg: "#16a34a",
        boxShadow: "0 8px 25px rgba(34,197,94,0.35)",
        transform: "translateY(-1px)",
    },
    _disabled: {
        opacity: 0.7,
        cursor: "not-allowed",
        boxShadow: "none",
        transform: "none",
    },
});
