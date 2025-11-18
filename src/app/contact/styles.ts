import { css } from "@/styled-system/css"

export const contactSection = css({
    py: "4rem",
    px: { base: "1.25rem", md: "2rem" },
    bg: "#050608",
    color: "#e5e7eb",
})

export const contactInner = css({
    maxWidth: "80rem",
    mx: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",

    md: {
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1.4fr)",
        gap: "2.5rem",
    },
})

export const cardBase = {
    borderRadius: "1.25rem",
    bg: "#111318",
    boxShadow: "0 18px 45px rgba(0,0,0,0.55)",
    border: "1px solid rgba(148,163,184,0.12)",
} as const
