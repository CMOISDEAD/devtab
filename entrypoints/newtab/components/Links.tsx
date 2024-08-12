import { Card, CardBody } from "@nextui-org/react"
import { links } from "../utils/data"
import { CardLinks } from "./CardLinks"

export const Links = () => {
  return (
    <Card className="flex-1 overflow-auto max-w-6xl">
      <CardBody className="flex flex-row gap-10">
        {links.map((link, i) => (
          <CardLinks key={i} title={link.title} links={link.links} />
        ))}
      </CardBody>
    </Card>
  )
}
