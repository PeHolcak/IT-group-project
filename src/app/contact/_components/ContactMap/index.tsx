
import Link from "next/link"
import {
    mapCard,
    mapPlaceholderText,
    mapButtonWrapper,
} from "./styles"
import { Button } from "@/components/Button"

export const ContactMap = () => {
    return (
        <div className={mapCard}>
            <p className={mapPlaceholderText}>Interaktivní mapa bude doplněna.</p>
            <div className={mapButtonWrapper}>
                <Link
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button variant="primary">Otevřít v Mapách</Button>
                </Link>
            </div>
        </div>
    )
}
