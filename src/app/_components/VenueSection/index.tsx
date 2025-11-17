import { Header2 } from "@/components/SectionTitle"
import { section, venueInfoGrid } from "../../styles"
import OpeningHoursTable from "./OpeningHoursTable"
import VenueMapPlaceholder from "./VenueMapPlaceholder"

export default function VenueSection() {
    return (
        <section className={section}>
            <div className={venueInfoGrid}>
                <div>
                    <Header2>Kde nás najdete</Header2>
                    <p>
                        Najdete nás kousek od metra, atmosféru tvoří dřevo, světýlka a regály
                        her připravené k vyzkoušení.
                    </p>

                    <OpeningHoursTable />

                    <address>
                        Rohanská 42, Praha 8
                        <br />
                        <a href="tel:+420777123456">+420 777 123 456</a>
                        <br />
                        <a href="mailto:ahoj@boardzone.cz">ahoj@boardzone.cz</a>
                    </address>
                </div>

                <VenueMapPlaceholder />
            </div>
        </section>
    )
}
