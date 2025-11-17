// app/menu/styles.ts
import { css } from "@/styled-system/css";

/* Vnější layout */

export const menuSection = css({
    py: "10",
    px: { base: "4", md: "6" },
    bg: "bg",
    backgroundImage:
        "radial-gradient(circle at 0% 0%, rgba(63, 185, 80, 0.12), transparent 55%)",
});

export const menuInner = css({
    maxWidth: "5xl",
    mx: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "6",
});

export const menuHeader = css({
    display: "flex",
    flexDirection: "column",
    gap: "3",
});

export const menuTitle = css({
    fontSize: { base: "2xl", md: "3xl" },
    fontWeight: "700",
});

export const menuSubtitle = css({
    maxWidth: "2xl",
    fontSize: "sm",
    color: "muted",
});

/* Kategorie – pill navigace */

export const pillNav = css({
    display: "inline-flex",
    alignItems: "center",
    gap: "1.5",
    mt: "2",
    padding: "0.25rem",
    borderRadius: "full",
    bg: "rgba(15,17,21,0.7)",
    backdropFilter: "blur(18px)",
    boxShadow: "0 18px 45px rgba(0,0,0,0.45)",
});

const pillBase = {
    borderRadius: "full",
    px: "3.25",
    py: "1.2",
    fontSize: "sm",
    border: "none",
    cursor: "pointer",
    transition: "transform 0.15s ease-out, background 0.15s ease-out, color 0.15s ease-out",
    whiteSpace: "nowrap",
} as const;

export const pillButton = css({
    ...pillBase,
    bg: "transparent",
    color: "muted",
    _hover: {
        bg: "rgba(31,41,55,0.75)",
        color: "text",
        transform: "translateY(-1px)",
    },
});

export const pillButtonActive = css({
    ...pillBase,
    bg: "primary",
    color: "#0b0d10",
    boxShadow: "0 10px 30px rgba(63,185,80,0.45)",
    transform: "translateY(-1px)",
});

/* Seznam položek */

export const itemsList = css({
    display: "flex",
    flexDirection: "column",
    gap: "3",
    mt: "5",
});

export const itemCard = css({
    position: "relative",
    overflow: "hidden",
    borderRadius: "2xl",
    bg: "rgba(23,26,33,0.95)",
    backdropFilter: "blur(20px)",
    px: { base: "4", md: "5" },
    py: { base: "3.5", md: "4" },
    boxShadow: "0 18px 40px rgba(0,0,0,0.6)",
    transition: "transform 0.18s ease-out, box-shadow 0.18s ease-out",
    _hover: {
        transform: "translateY(-2px)",
        boxShadow: "0 24px 55px rgba(0,0,0,0.75)",
    },
});

export const itemHeader = css({
    display: "flex",
    flexDirection: { base: "column", md: "row" },
    alignItems: { base: "flex-start", md: "center" },
    justifyContent: "space-between",
    gap: "3",
});

export const itemLeft = css({
    display: "flex",
    flexDirection: "column",
    gap: "1",
});

export const itemTitle = css({
    fontWeight: "600",
    fontSize: "lg",
});

export const itemDescription = css({
    fontSize: "sm",
    color: "muted",
});

export const itemMeta = css({
    fontSize: "xs",
    color: "muted",
    opacity: 0.8,
});

/* Cena – badge vpravo */

export const itemPriceWrapper = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "1",
    minWidth: "5.5rem",
});

export const itemPriceTag = css({
    fontSize: "xs",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "muted",
});

export const itemPrice = css({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "full",
    px: "3.25",
    py: "1.15",
    fontWeight: "600",
    fontSize: "sm",
    backgroundImage:
        "linear-gradient(135deg, rgba(63,185,80,1), rgba(148, 255, 167, 0.9))",
    color: "#050608",
    boxShadow: "0 14px 35px rgba(63,185,80,0.5)",
});

/* Paginace – měkké pill tlačítka */

export const paginationWrapper = css({
    display: "flex",
    flexDirection: { base: "column", md: "row" },
    alignItems: { base: "flex-start", md: "center" },
    justifyContent: "space-between",
    gap: "3",
    mt: "6",
});

export const paginationInfo = css({
    fontSize: "sm",
    color: "muted",
});

export const paginationButtons = css({
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    flexWrap: "wrap",
});

const paginationBase = {
    borderRadius: "full",
    fontSize: "sm",
    px: "2.5",
    py: "0.85",
    cursor: "pointer",
    border: "none",
    background: "rgba(15,17,21,0.85)",
    color: "muted",
    transition: "transform 0.15s ease-out, background 0.15s ease-out, color 0.15s ease-out",
    _hover: {
        background: "rgba(31,41,55,0.9)",
        color: "text",
        transform: "translateY(-1px)",
    },
    _disabled: {
        opacity: 0.35,
        cursor: "not-allowed",
        transform: "none",
    },
} as const;

export const paginationButton = css({
    ...paginationBase,
});

export const paginationButtonActive = css({
    ...paginationBase,
    background: "primary",
    color: "#050608",
    boxShadow: "0 12px 30px rgba(63,185,80,0.55)",
});
