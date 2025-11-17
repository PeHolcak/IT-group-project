import Link from "next/link"
import {
    contactInfoCard,
    contactHeading,
    contactLead,
    contactList,
    contactLabel,
    contactValue,
} from "./styles"
import OpeningHoursTable from "@/components/OpeningHoursTable"


export const ContactInfo = () => {
    return (
        <div className={contactInfoCard}>
            <h2 className={contactHeading}>Kontakt &amp; informace</h2>
            <p className={contactLead}>
                Ozvěte se nám, pokud máte dotazy k rezervacím, firemním večírkům nebo
                speciálním přáním pro vaši herní partu.
            </p>

            <dl className={contactList}>
                <div>
                    <dt className={contactLabel}>Adresa:</dt>
                    <dd className={contactValue}>Rohanská 42, Praha 8</dd>
                </div>
                <div>
                    <dt className={contactLabel}>Telefon:</dt>
                    <dd className={contactValue}>
                        <Link href="tel:+420777123456">+420 777 123 456</Link>
                    </dd>
                </div>
                <div>
                    <dt className={contactLabel}>E-mail:</dt>
                    <dd className={contactValue}>
                        <Link href="mailto:ahoj@boardzone.cz">ahoj@boardzone.cz</Link>
                    </dd>
                </div>
            </dl>

            <OpeningHoursTable />
        </div>
    )
}
