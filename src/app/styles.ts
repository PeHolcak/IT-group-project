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

export const section = css({
  py: "xl",
})

export const hero = css({
  py: "xl",
  pb: "lg",
  bg: "bg",
  backgroundImage: "gradients.satisfies",
})

export const heroInner = css({
  display: "grid",
  gap: "lg",
  md: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    alignItems: "center",
  },
})

export const heroCopy = css({
  paddingInline: "2rem",
})

export const heroTitle = css({
  fontSize: "2xl",
  lineHeight: 1.1,
  mb: "sm",
})

export const heroText = css({
  color: "muted",
  maxWidth: "32ch",
})

export const heroActions = css({
  display: "flex",
  flexWrap: "wrap",
  gap: "sm",
  mt: "md",
})

export const heroMedia = css({
  "& img": {
    boxShadow: "soft",
    borderRadius: "md",
  },
})

export const eyebrow = css({
  fontSize: "sm",
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  color: "accent",
  mb: "xs",
})

export const grid = css({
  display: "grid",
  gap: "md",
})

export const gridCols3 = css({
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
})

export const card = css({
  bg: "surface",
  borderRadius: "lg",
  p: "md",
  boxShadow: "soft",
})

export const titleName = css({
  fontWeight: 600,
  fontSize: "1.4rem",
  mb: "xs",
})

export const venueInfoGrid = css({
  display: "grid",
  gap: "lg",
  md: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },
})

export const hoursTableWrapper = css({
  mt: "md",
})

export const hoursTable = css({
  width: "100%",
  borderCollapse: "collapse",
  bg: "rgba(23, 26, 33, 0.7)",
  borderRadius: "md",
  overflow: "hidden",
  "& th, & td": {
    py: "0.75rem",
    px: "1rem",
    borderBottom: "1px solid rgba(229, 231, 235, 0.06)",
    textAlign: "left",
  },
  "& tr:last-child th, & tr:last-child td": {
    borderBottom: "none",
  },
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
