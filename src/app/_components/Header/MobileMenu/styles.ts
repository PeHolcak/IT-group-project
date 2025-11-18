import { css } from "@/styled-system/css";

export const mobileDrawer = css({
  position: "fixed",
  inset: 0,
  bg: "linear-gradient(165deg, rgba(23, 26, 33, 0.98), rgba(12, 14, 18, 0.98))",
  p: "6rem 2rem",
  display: {
    base: "flex",
    sm: "none",
  },
  flexDirection: "column",
  gap: "0.6rem",
  transition: "opacity 0.2s ease, transform 0.2s ease",
  zIndex: 40,
});

export const mobileDrawerClose = css({
  position: "absolute",
  top: "md",
  right: "md",
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
