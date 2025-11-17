import { Button } from "@/components/Button";
import { mapPlaceholder } from "../../../styles";

export default function VenueMapPlaceholder() {
    return (
        <div className={mapPlaceholder} aria-label="Mapa BoardZone">
            <p>Mapa se připravuje.</p>
            <Button variant="ghost">Otevřít v Mapách</Button>
        </div>
    );
}
