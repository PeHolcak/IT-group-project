import {
    contactSection,
    contactInner,
} from "./styles"
import { ContactMap } from "./_components/ContactMap"
import { ContactInfo } from "./_components/ContactInfo"
import { ContactForm } from "./_components/ContactForm"

const ContactSection = () => {
    return (
        <map className={contactSection}>
            <div className={contactInner}>
                <ContactInfo />
                <ContactForm />

            </div>

            <ContactMap />
        </map>
    )
}

export default ContactSection