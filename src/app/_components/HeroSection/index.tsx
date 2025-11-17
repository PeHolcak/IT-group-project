import Image from "next/image";
import Link from "next/link";
import {
    hero,
    heroInner,
    heroCopy,
    heroTitle,
    heroText,
    heroActions,
    heroMedia,
    eyebrow,
} from "../../styles";
import { Button } from "@/components/Button";

export default function HeroSection() {
    return (
        <section className={hero}>
            <div className={heroInner}>
                <div className={heroCopy}>
                    <p className={eyebrow}>Deskové hry &amp; řemeslné pivo</p>
                    <h1 className={heroTitle}>
                        Deskové hry &amp; pivo. Rezervuj stůl online.
                    </h1>
                    <p className={heroText}>
                        Vyrazte s partou na večer plný strategií, příběhů a speciálních piv.
                        Rezervace zvládnete během pár kliknutí.
                    </p>

                    <div className={heroActions}>
                        <Link href="/reservation">
                            <Button variant="primary">Rezervovat stůl</Button>
                        </Link>
                        <Link href="/menu">
                            <Button variant="ghost">Zobrazit menu</Button>
                        </Link>
                    </div>
                </div>

                <div className={heroMedia}>
                    <Image
                        src="/images/hero-board.svg"
                        alt="Deskové hry a pivo"
                        width={600}
                        height={400}
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}
