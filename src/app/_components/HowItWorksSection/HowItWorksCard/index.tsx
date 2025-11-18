import { card, titleName } from "./styles"

type Props = {
  title: string
  description: string
}

export default function HowItWorksCard({ title, description }: Props) {
  return (
    <article className={card}>
      <h3 className={titleName}>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
