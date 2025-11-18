import { css } from "@/styled-system/css"

export const layoutBody = css({
  margin: 0,
  bg: "bg",
  color: "text",
  fontFamily: "sans",
  fontSize: "base",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
})

export const main = css({
  flex: "1 1 auto",
  paddingBottom: "4.5rem",
  md: {
    paddingBottom: 0,
  },
})

export const shell = css({
  width: "min(100%, 1080px)",
  mx: "auto",
  px: "md",
})

export const mapPlaceholder = css({
  bg: "repeating-linear-gradient(135deg, rgba(63, 185, 80, 0.15), rgba(63, 185, 80, 0.15) 12px, rgba(23, 26, 33, 0.7) 12px, rgba(23, 26, 33, 0.7) 24px)",
  borderRadius: "lg",
  p: "lg",
  display: "grid",
  placeContent: "center",
  gap: "md",
  textAlign: "center",
})

export const loadingWrapper = css({
  py: "10rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const Text = css({
  fontSize: "sm",
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  fontWeight: 500,
  color: { base: "gray.100", _light: "gray.700" },
})

export const spinner = css({
  width: "48px",
  height: "48px",
  borderRadius: "24px",
  borderWidth: "5px",
  borderStyle: "solid",
  borderColor: "rgba(63, 185, 80, 0.25)",
  borderTopColor: "white",
  animation: "spin 0.8s linear infinite",
})
