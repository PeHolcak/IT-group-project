"use client"

import { Button } from "@/components/Button"
import {
  tableCard,
  tableHeader,
  tableName,
  tableCapacity,
  tableDescription,
  tableActions,
} from "./styles"

type ReservationCardProps = {
  id: string
  label: string
  capacity: number
}

export const ReservationCard = ({ label, capacity, id }: ReservationCardProps) => {
  return (
    <article className={tableCard}>
      <header className={tableHeader}>
        <h3 className={tableName}>{label}</h3>
        <p className={tableCapacity}>
          Kapacita: {capacity} {capacity === 1 ? "osoba" : "osob"}
        </p>
      </header>

      <p className={tableDescription}>
        Ideální pro skupiny, které chtějí pohodlně hrát bez rušení.
      </p>

      <div className={tableActions}>
        <Button onClick={() => alert(`Rezervovat ${label} (ID: ${id})`)} fullWidth>
          Rezervovat
        </Button>
      </div>
    </article>
  )
}
