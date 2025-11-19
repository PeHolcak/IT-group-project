import { css } from "@/styled-system/css"

export const reservationSection = css({
  display: "flex",
  flexDirection: "column",
  gap: "1.75rem",
  width: "min(100%, 1080px)",
  mx: "auto",
})

export const reservationAlert = css({
  borderRadius: "999px",
  paddingBlock: "0.75rem",
  paddingInline: "1.25rem",
  background: "linear-gradient(90deg, rgba(126, 86, 0, 0.15), rgba(126, 86, 0, 0.05))",
  border: "1px solid rgba(245, 158, 11, 0.3)",
  color: "#accent",
  fontSize: "0.9rem",
})

export const filtersRow = css({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1rem",
  "@media (min-width: 768px)": {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  },
})

export const filterField = css({
  display: "flex",
  flexDirection: "column",
  gap: "0.35rem",
})

export const filterLabel = css({
  fontSize: "0.8rem",
  fontWeight: 500,
  color: "#9ca3af",
})

export const filterInputWrapper = css({
  position: "relative",
  display: "flex",
  alignItems: "center",
})

export const filterInput = css({
  width: "100%",
  borderRadius: "999px",
  border: "1px solid rgba(55, 65, 81, 0.9)",
  backgroundColor: "#111827",
  paddingBlock: "0.6rem",
  paddingInline: "0.9rem 2.4rem",
  fontSize: "0.9rem",
  color: "text",
  outline: "none",
  _focusVisible: {
    borderColor: "primary",
    boxShadow: "0 0 0 1px var(--colors-primary)",
  },
})

export const filterSelect = filterInput

export const filterIcon = css({
  position: "absolute",
  right: "0.9rem",
  fontSize: "0.9rem",
  opacity: 0.75,
})

// Grid stolů
export const tablesGrid = css({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1.5rem",
  paddingBlockEnd: "1rem",
  "@media (min-width: 640px)": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },
  "@media (min-width: 1024px)": {
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  },
})

// Karta stolu
export const tableCard = css({
  backgroundColor: "#111827",
  borderRadius: "1.25rem",
  padding: "1.25rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "1rem",
  boxShadow: "0 14px 40px rgba(0, 0, 0, 0.6)",
  border: "1px solid rgba(15, 23, 42, 0.9)",
})

export const tableHeader = css({
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
})

export const tableName = css({
  fontSize: "1rem",
  fontWeight: 600,
  color: "#f9fafb",
})

export const tableCapacity = css({
  fontSize: "0.85rem",
  color: "#9ca3af",
})

export const tableDescription = css({
  fontSize: "0.9rem",
  lineHeight: 1.5,
  color: "#d1d5db",
})

export const tableActions = css({
  marginTop: "0.25rem",
})

export const reserveButton = css({
  width: "100%",
  borderRadius: "999px",
  paddingBlock: "0.5rem",
  fontSize: "0.9rem",
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
  backgroundColor: "#22c55e",
  color: "#052e16",
  transition: "transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease",
  boxShadow: "0 10px 24px rgba(34, 197, 94, 0.35)",
  _hover: {
    backgroundColor: "#16a34a",
    transform: "translateY(-1px)",
    boxShadow: "0 14px 28px rgba(34, 197, 94, 0.4)",
  },
  _active: {
    transform: "translateY(0)",
    boxShadow: "0 6px 16px rgba(34, 197, 94, 0.35)",
  },
  _focusVisible: {
    outline: "2px solid #22c55e",
    outlineOffset: "2px",
  },
})
