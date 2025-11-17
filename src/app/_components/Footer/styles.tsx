import { css } from "@/styled-system/css"

export const footer = css({
    bg: "rgba(23, 26, 33, 0.7)",
    py: "lg",
    mt: "4rem",
})

export const footerInner = css({
    display: "grid",
    gap: "2rem",
    alignItems: "start",
    gridTemplateColumns: {
        base: "1fr",
        lg: "repeat(3, minmax(0, 1fr))",
    },

    px: "1.5rem",
})

export const footerBottom = css({
    mt: "3rem",
    borderTop: "1px solid token(colors.muted)",
    pt: "1rem",

    display: "flex",
    flexDirection: {
        base: "column",
        lg: "row",
    },

    justifyContent: "space-between",
    alignItems: {
        base: "flex-start",
        lg: "center",
    },

    gap: "0.75rem",
    fontSize: "sm",
    color: "muted",

    px: {
        base: "1rem",
        lg: "0",
    },
})
