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

export const contactInfoCard = css({
    ...cardBase,
    p: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.75rem",
})

export const contactHeading = css({
    fontSize: { base: "1.5rem", md: "1.75rem" },
    fontWeight: 700,
})

export const contactLead = css({
    fontSize: "0.95rem",
    lineHeight: 1.6,
    color: "#cbd5f5",
})

export const contactList = css({
    display: "flex",
    flexDirection: "column",
    gap: "0.65rem",
    fontSize: "0.95rem",
})

export const contactLabel = css({
    fontWeight: 600,
    color: "#e5e7eb",
})

export const contactValue = css({
    color: "#a5b4fc",

})

export const hoursWrapper = css({
    mt: "0.75rem",
})

export const hoursHeading = css({
    fontSize: "0.95rem",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#9ca3af",
    mb: "0.75rem",
})

export const hoursTable = css({
    borderRadius: "0.9rem",
    overflow: "hidden",
    border: "1px solid rgba(31,41,55,0.9)",
    bg: "#020617",
})

export const hoursRow = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    px: "1.1rem",
    py: "0.8rem",
    fontSize: "0.95rem",

})

export const hoursDay = css({
    fontWeight: 600,
})

export const hoursTime = css({
    fontVariantNumeric: "tabular-nums",
    color: "#e5e7eb",
})

export const formCard = css({
    ...cardBase,
    p: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
})

export const formHeading = css({
    fontSize: { base: "1.4rem", md: "1.6rem" },
    fontWeight: 700,
})

export const formField = css({
    display: "flex",
    flexDirection: "column",
    gap: "0.45rem",
    mb: "1rem",
})

export const formLabel = css({
    fontSize: "0.85rem",
    fontWeight: 500,
    color: "#9ca3af",
})

const inputBase = css.raw({
    width: "100%",
    borderRadius: "0.9rem",
    border: "1px solid rgba(55,65,81,0.9)",
    bg: "#020617",
    color: "#e5e7eb",
    fontSize: "0.95rem",
    px: "0.9rem",
    py: "0.7rem",
    outline: "none",
    transition: "border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease",

    _placeholder: {
        color: "#6b7280",
    },
    _focusWithin: {
        borderColor: "#3fb950",
        boxShadow: "0 0 0 1px rgba(63,185,80,0.8)",
        bg: "#020617",
    },
})

export const formInput = css(inputBase)

export const formTextarea = css({
    ...inputBase,
    resize: "vertical",
    minHeight: "7rem",
})

export const formButton = css({
    mt: "0.5rem",
    borderRadius: "999px",
    border: "none",
    px: "1.5rem",
    py: "0.85rem",
    fontSize: "0.95rem",
    fontWeight: 600,
    bg: "#3fb950",
    color: "#020617",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 12px 28px rgba(34,197,94,0.35)",
    transition:
        "transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease, color 0.15s ease",

    _hover: {
        transform: "translateY(-1px)",
        boxShadow: "0 18px 40px rgba(34,197,94,0.45)",
        bg: "#22c55e",
    },
    _active: {
        transform: "translateY(0px)",
        boxShadow: "0 8px 20px rgba(34,197,94,0.35)",
    },
})


export const form = css({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
})