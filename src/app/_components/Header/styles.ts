import { css } from "@/styled-system/css";

export const siteHeader = css({
  position: "sticky",
  top: 0,
  zIndex: 50,
  backdropFilter: "blur(16px)",
  bg: "rgba(15, 17, 21, 0.8)",
});

export const siteHeaderInner = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "md",
  py: "0.85rem",
});

export const siteHeaderBrand = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  fontWeight: 700,
  textDecoration: "none",
});


export const siteHeaderWordmark = css({
  color: "text",
});

export const mobileMenuButton = css({
  paddingLeft: "5px !important",
  display: {
    base: "block",
    lg: "none",
  },
});

export const siteHeaderNav = css({
  display: {
    base: "none",
    lg: "block",
  },
});

export const siteHeaderNavList = css({
  display: "flex",
  flexDirection: {
    base: "column",
    sm: "row",
  },
  gap: "md",
  listStyle: "none",
  m: 0,
  p: 0,
});

export const navLink = css({
  textDecoration: "none",
  fontWeight: 600,
  color: "muted",
  transition: "color 0.2s ease",
  _hover: {
    color: "text",
  },
});

export const navLinkActive = css({
  color: "primary !important",
});

export const siteHeaderCta = css({
  display: {
    base: "none",
    lg: "inline-flex",
  },
  alignItems: "center",
  gap: "sm",
});
