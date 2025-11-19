import Link from "next/link"
import { contactLead, contactList, contactLabel } from "./styles"
import { OpeningHoursTable } from "@/components/OpeningHoursTable"
import { Card } from "@/app/contact/_components/Card"

export const ContactInfo = () => {
  return (
    <Card title="Kontakt &amp; informace">
      <p className={contactLead}>
        Ozvěte se nám, pokud máte dotazy k rezervacím, firemním večírkům nebo speciálním přáním pro
        vaši herní partu.
      </p>

      <dl className={contactList}>
        <div>
          <dt className={contactLabel}>Adresa:</dt>
          <dd>Rohanská 42, Praha 8</dd>
        </div>
        <div>
          <dt className={contactLabel}>Telefon:</dt>
          <dd>
            <Link href="tel:+420777123456">+420 777 123 456</Link>
          </dd>
        </div>
        <div>
          <dt className={contactLabel}>E-mail:</dt>
          <dd>
            <Link href="mailto:ahoj@boardzone.cz">ahoj@boardzone.cz</Link>
          </dd>
        </div>
      </dl>

      <OpeningHoursTable />
    </Card>
  )
}
