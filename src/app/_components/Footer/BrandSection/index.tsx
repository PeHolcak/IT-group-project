import { Header2 } from "@/components/SectionTitle"
import { brandTitle, brandWrapper, contactItem } from "./styles"


export const BrandSection = () => {
    return (
        <div className={brandWrapper}>
            <Header2>BoardZone</Header2>
            <p>Rohanská 42, Praha 8</p>
            <p className={contactItem}>
                <strong>Telefon:</strong>{" "}
                <a href="tel:+420777123456">
                    +420 777 123 456
                </a>
            </p>
            <p className={contactItem}>
                <strong>E-mail:</strong>{" "}
                <a href="mailto:ahoj@boardzone.cz">
                    ahoj@boardzone.cz
                </a>
            </p>
        </div>
    )
}
