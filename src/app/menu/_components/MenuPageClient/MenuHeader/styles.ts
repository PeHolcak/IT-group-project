// app/menu/MenuHeader.styles.ts
import { css } from "@/styled-system/css";

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
