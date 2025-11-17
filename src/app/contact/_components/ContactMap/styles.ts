
import { css } from "@/styled-system/css"
import { cardBase } from "../../styles"

export const mapCard = css({
    ...cardBase,
    mt: "2rem",
    p: "2rem",
    position: "relative",
    overflow: "hidden",
    bg: "#020617",
    backgroundImage:
        "repeating-linear-gradient(135deg, rgba(63,185,80,0.18) 0, rgba(63,185,80,0.18) 14px, transparent 14px, transparent 28px)",
})

export const mapPlaceholderText = css({
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: 500,
    mb: "1.5rem",
})

export const mapButtonWrapper = css({
    position: "relative",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
})
