import Link from "next/link"
import { footer, footerInner, footerBottom } from "./styles"
import { shell } from "@/app/styles"
import { BrandSection } from "./BrandSection"
import { HoursSection } from "./HoursSection"
import { SocialSection } from "./SocialSection"



export const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className={footer}>
            <div className={`${shell} ${footerInner}`}>
                <BrandSection />
                <HoursSection />
                <SocialSection />
            </div>

            <div className={`${shell} ${footerBottom}`}>
                <p>
                    &copy; {year} BoardZone. Všechna práva vyhrazena.
                </p>
                <Link href="#">Zásady ochrany osobních údajů</Link>
            </div>
        </footer>
    )
}
