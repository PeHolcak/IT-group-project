import { css } from "@/styled-system/css"

export const reservationSection = css({})

export const reservationInner = css({
  maxWidth: "1120px",
  marginInline: "auto",
  paddingInline: "1.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.75rem",
})

export const reservationHeader = css({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
})

export const reservationTitle = css({
  fontSize: "1.5rem",
  fontWeight: 700,
  color: "#f9fafb",
})

export const reservationLead = css({
  fontSize: "0.95rem",
  maxWidth: "40rem",
  color: "#9ca3af",
})

// Alert
export const reservationAlert = css({
  borderRadius: "999px",
  paddingBlock: "0.75rem",
  paddingInline: "1.25rem",
  background: "linear-gradient(90deg, rgba(126, 86, 0, 0.15), rgba(126, 86, 0, 0.05))",
  border: "1px solid rgba(245, 158, 11, 0.3)",
  color: "#fbbf24",
  fontSize: "0.9rem",
})

// Filtry
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
  color: "#e5e7eb",
  outline: "none",
  _focusVisible: {
    borderColor: "#3fb950",
    boxShadow: "0 0 0 1px #3fb950",
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

export const tableCard = css({
  backgroundColor: "dark",
  borderRadius: "1.25rem",
  padding: "1.25rem",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "1rem",
  boxShadow: "0 1.4rem 4rem var(--colors-secondary_70)",
})

export const tableHeader = css({
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
})

export const tableName = css({
  fontSize: "1rem",
  fontWeight: 600,
  color: "text",
})

export const tableCapacity = css({
  fontSize: "0.85rem",
  color: "muted",
})

export const tableDescription = css({
  fontSize: "0.9rem",
  lineHeight: 1.5,
  color: "text",
})

export const tableActions = css({
  marginTop: "0.25rem",
})
