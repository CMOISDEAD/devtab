import { Card, CardBody } from "@nextui-org/react"
import { links } from "../utils/data"
import { CardLinks } from "./CardLinks"

export const Links = () => {
  return (
    <Card className="w-full">
      <CardBody className="flex flex-row gap-10">
        {links.map((link, i) => (
          <CardLinks key={i} title={link.title} links={link.links} />
        ))}
      </CardBody>
    </Card>
  )
}
