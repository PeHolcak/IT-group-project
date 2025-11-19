import { PropsWithChildren } from "react"

import { CardStyles, contactHeading } from "./styles"

type CardProps = PropsWithChildren<{ title: string }>

export const Card = ({ title, children }: CardProps) => {
  return (
    <div className={CardStyles}>
      <h2 className={contactHeading}>{title}</h2>
      {children}
    </div>
  )
}
