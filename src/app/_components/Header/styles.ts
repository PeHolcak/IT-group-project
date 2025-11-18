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

export const siteHeaderLogo = css({
  fontSize: "1.5rem",
});

export const siteHeaderWordmark = css({
  color: "text",
});

export const siteHeaderToggle = css({
  display: {
    base: "inline-flex",
    sm: "none",
  },
  alignItems: "center",
  justifyContent: "center",
  bg: "rgba(255, 255, 255, 0.04)",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "rgba(229, 231, 235, 0.18)",
  color: "text",
  borderRadius: "sm",
  p: "1rem",
  boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.05)",
  cursor: "pointer",
  _focusVisible: {
    outline: "2px solid",
    outlineColor: "accent",
    outlineOffset: "2px",
  },
});

export const burger = css({
  display: "block",
  width: "1.5rem",
  height: "2px",
  bg: "currentColor",
  position: "relative",
  transition: "transform 0.2s ease, opacity 0.2s ease, background 0.2s ease",
  _before: {
    content: '""',
    position: "absolute",
    left: 0,
    top: "-6px",
    width: "1.5rem",
    height: "2px",
    bg: "currentColor",
    transition: "transform 0.2s ease, opacity 0.2s ease",
  },
  _after: {
    content: '""',
    position: "absolute",
    left: 0,
    top: "6px",
    width: "1.5rem",
    height: "2px",
    bg: "currentColor",
    transition: "transform 0.2s ease, opacity 0.2s ease",
  },
});

export const burgerOpen = css({
  bg: "transparent",
  _before: {
    transform: "translateY(6px) rotate(45deg)",
  },
  _after: {
    transform: "translateY(-6px) rotate(-45deg)",
  },
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

export const mobileDrawer = css({
  position: "fixed",
  inset: 0,
  bg: "linear-gradient(165deg, rgba(23, 26, 33, 0.98), rgba(12, 14, 18, 0.98))",
  boxShadow: "0 35px 60px rgba(0, 0, 0, 0.6)",
  p: "6rem md lg",
  display: {
    base: "flex",
    sm: "none",
  },
  flexDirection: "column",
  gap: "lg",
  transform: "translateY(-10%)",
  opacity: 0,
  visibility: "hidden",
  transition: "opacity 0.2s ease, transform 0.2s ease",
  zIndex: 40,
});

export const mobileDrawerOpen = css({
  opacity: 1,
  transform: "translateY(0)",
  visibility: "visible",
});

export const mobileDrawerClose = css({
  position: "absolute",
  top: "md",
  right: "md",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: "sm",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "rgba(229, 231, 235, 0.18)",
  bg: "rgba(255, 255, 255, 0.04)",
  color: "text",
  cursor: "pointer",
  transition: "background 0.2s ease, border-color 0.2s ease",
  _hover: {
    bg: "rgba(255, 255, 255, 0.08)",
    borderColor: "rgba(229, 231, 235, 0.28)",
  },
  _focusVisible: {
    outline: "2px solid",
    outlineColor: "accent",
    outlineOffset: "2px",
  },
});

export const mobileDrawerCloseIcon = css({
  display: "block",
  width: "1.25rem",
  height: "2px",
  bg: "transparent",
  position: "relative",
  _before: {
    content: '""',
    position: "absolute",
    left: 0,
    width: "1.25rem",
    height: "2px",
    bg: "currentColor",
    transform: "rotate(45deg)",
  },
  _after: {
    content: '""',
    position: "absolute",
    left: 0,
    width: "1.25rem",
    height: "2px",
    bg: "currentColor",
    transform: "rotate(-45deg)",
  },
});

export const mobileDrawerNav = css({
  // wrapper <nav>
});

export const mobileDrawerNavList = css({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  listStyle: "none",
  m: 0,
  p: 0,
});

export const mobileDrawerNavLink = css({
  display: "block",
  textDecoration: "none",
  borderRadius: "md",
  bg: "rgba(255, 255, 255, 0.04)",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "rgba(229, 231, 235, 0.08)",
  color: "text",
  fontSize: "1.05rem",
  fontWeight: 600,
  letterSpacing: "0.02em",
  px: "1.15rem",
  py: "0.95rem",
  transition:
    "background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease",
  _hover: {
    bg: "rgba(63, 185, 80, 0.16)",
    borderColor: "rgba(63, 185, 80, 0.45)",
    color: "text",
    transform: "translateY(-1px)",
  },
});

export const mobileDrawerNavLinkActive = css({
  bg: "rgba(63, 185, 80, 0.16)",
  borderColor: "rgba(63, 185, 80, 0.45)",
});

export const mobileDrawerCta = css({
  display: "grid",
  gap: "sm",
  pt: "0.5rem",
  borderTopWidth: "1px",
  borderTopStyle: "solid",
  borderTopColor: "rgba(229, 231, 235, 0.08)",
});

export const srOnly = css({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  border: 0,
});
