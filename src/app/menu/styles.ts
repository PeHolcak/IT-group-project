// app/menu/page.styles.ts
import { css } from "@/styled-system/css";

export const menuSection = css({
  py: "10",
  px: { base: "4", md: "6" },
});

export const menuInner = css({
  maxWidth: "5xl",
  mx: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "6",
});
