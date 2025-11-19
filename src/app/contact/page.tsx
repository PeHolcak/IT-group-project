import { contactSection, contactInner } from "./styles"
import { Map } from "@/components/Map"
import { ContactInfo } from "./_components/ContactInfo"
import { ContactForm } from "./_components/ContactForm"

const ContactSection = () => {
  return (
    <map className={contactSection}>
      <div className={contactInner}>
        <ContactInfo />
        <ContactForm />
      </div>
      <Map />
    </map>
  )
}

export default ContactSection
