import { Header } from "@/components/Header"
import { Filters } from "./_components/Filters"
import { Table } from "./_components/Table"
import { reservationSection, reservationAlert } from "./styles"

const ReservationSection = async () => {
  return (
    <main className={reservationSection}>
      <Header
        title="Rezervace stolu"
        description="
              Vyberte datum, čas a stůl, který bude vaší partě nejvíc sedět. Přihlášení uživatelé
              mohou rezervovat jedním klikem."
      />
      <div className={reservationAlert}>Pro rezervaci se prosím přihlas nebo zaregistruj.</div>
      <Filters />
      <Table />
    </main>
  )
}
export default ReservationSection
