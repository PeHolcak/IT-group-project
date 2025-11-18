import { css } from "@/styled-system/css"

export const overlay = css({
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bg: "rgba(0,0,0,0.65)",
  zIndex: 40,
})

export const dialog = css({
  width: "100%",
  maxWidth: "460px",
  bg: "#111827",
  color: "#e5e7eb",
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
  color: "#9ca3af",
  fontSize: "1.4rem",
  cursor: "pointer",
  lineHeight: 1,
  _hover: {
    color: "#f9fafb",
  },
})

export const title = css({
  fontSize: "1.5rem",
  fontWeight: 700,
})

export const form = css({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
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

export const forgotLink = css({
  fontSize: "0.9rem",
  textDecoration: "underline",
})
