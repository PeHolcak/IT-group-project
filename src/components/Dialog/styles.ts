import { css } from "@/styled-system/css"

export const overlay = css({
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bg: "secondary",
  zIndex: 40,
})

export const dialog = css({
  width: "100%",
  maxWidth: "460px",
  bg: "#111827",
  color: "text",
  borderRadius: "1.25rem",
  boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
  p: "2rem",
  position: "relative",
})

export const dialogHeader = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  mb: "1.5rem",
})

export const closeButton = css({
  border: "none",
  bg: "transparent",
  color: "muted",
  fontSize: "1.7rem",
  cursor: "pointer",
  lineHeight: 1,
  _hover: {
    color: "white",
  },
})

export const titleClass = css({
  fontSize: "1.7rem",
  fontWeight: 700,
})

export const form = css({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
})

export const field = css({
  display: "flex",
  flexDirection: "column",
  gap: "0.35rem",
})

export const labelText = css({
  fontSize: "0.85rem",
  color: "#d1d5db",
})

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
})

export const errorText = css({
  fontSize: "0.8rem",
  color: "#f97373",
})

export const rememberRow = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  mt: "0.5rem",
})

export const checkboxLabel = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "0.9rem",
  color: "#e5e7eb",
  cursor: "pointer",
})

export const checkbox = css({
  width: "1rem",
  height: "1rem",
  borderRadius: "0.25rem",
  accentColor: "#22c55e",
})

export const actionsRow = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  mt: "1.25rem",
})

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
})

export const forgotLink = css({
  fontSize: "0.9rem",
  color: "#fbbf24",
  textDecoration: "underline",
  _hover: {
    color: "#facc15",
  },
})
