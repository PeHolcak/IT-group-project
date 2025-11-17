import { Header2 } from "@/components/SectionTitle"
import { section, venueInfoGrid } from "../../styles"
import OpeningHoursTable from "@/components/OpeningHoursTable"
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
                </div>

                <VenueMapPlaceholder />
            </div>
        </section>
    )
}
