import { css } from "@/styled-system/css";

export const profilePage = css({
    py: "xl",
    bg: "bg",
});

export const profileCard = css({
    maxWidth: "48rem",
    marginInline: "auto",
    backgroundColor: "rgba(23, 26, 33, 0.95)",
    borderRadius: "lg",
    padding: "1.75rem",
    boxShadow: "0 18px 40px rgba(0, 0, 0, 0.45)",
    borderWidth: "1px",
    borderColor: "rgba(63, 185, 80, 0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
});

export const profileHeader = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    borderBottomWidth: "1px",
    borderBottomColor: "rgba(148, 163, 184, 0.35)",
    paddingBottom: "1rem",
});

export const profileTitle = css({
    fontSize: "1.5rem",
    fontWeight: 700,
    lineHeight: 1.2,
    color: "text",
});

export const profileMeta = css({
    fontSize: "0.85rem",
    color: "muted",
    marginTop: "0.35rem",
});

export const roleBadge = css({
    fontSize: "0.85rem",
    paddingInline: "0.9rem",
    paddingBlock: "0.35rem",
    borderRadius: "0.4rem",
    background:
        "rgba(63, 185, 80, 0.7)",
    color: "secondary",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    whiteSpace: "nowrap",
});

export const profileGrid = css({
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "1.25rem 1.5rem",
    mt: "0.5rem",
    "@media (max-width: 768px)": {
        gridTemplateColumns: "1fr",
    },
});

export const profileItem = css({
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
});

export const profileLabel = css({
    fontSize: "0.8rem",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "muted",
});

export const profileValue = css({
    fontSize: "0.95rem",
    color: "text",
    fontWeight: 500,
    wordBreak: "break-word",
});
