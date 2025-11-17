import { Filters } from "./_components/Filters";
import { Table } from "./_components/Table";
import {
    reservationSection,
    reservationInner,
    reservationHeader,
    reservationTitle,
    reservationLead,
    reservationAlert,
} from "./styles";

type Table = {
    id: string;
    label: string;
    capacity: number;
};



const ReservationSection = () => {
    return (
        <main className={reservationSection}>
            <div className={reservationInner}>
                <header className={reservationHeader}>
                    <div>
                        <h2 className={reservationTitle}>Rezervace stolu</h2>
                        <p className={reservationLead}>
                            Vyberte datum, čas a stůl, který bude vaší partě nejvíc sedět.
                            Přihlášení uživatelé mohou rezervovat jedním klikem.
                        </p>
                    </div>
                </header>

                <div className={reservationAlert}>
                    Pro rezervaci se prosím přihlas nebo zaregistruj.
                </div>

                <Filters />

                <Table />
            </div>
        </main>
    );
};
export default ReservationSection;  