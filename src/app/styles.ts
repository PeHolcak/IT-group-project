import { css } from '@/styled-system/css'

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
    backgroundImage:
        "radial-gradient(circle at 15% 20%, rgba(63, 185, 80, 0.25), transparent 55%)",
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
    mb: "xs"
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
    minH: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bg: { base: "gray.950", _light: "gray.50" },
    px: "4",
})

export const loadingCard = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.75rem",
    borderRadius: "xl",
    bg: { base: "rgba(17, 24, 39, 0.92)", _light: "white" },
    boxShadow: "0 18px 45px rgba(15, 23, 42, 0.45)",
    px: "1.75rem",
    py: "1.4rem",
    borderWidth: "1px",
    borderColor: { base: "whiteAlpha.200", _light: "gray.200" },
})


export const Text = css({
    fontSize: "sm",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    fontWeight: 500,
    color: { base: "gray.100", _light: "gray.700" },
})