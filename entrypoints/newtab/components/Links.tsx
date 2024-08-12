import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { CardLinks } from "./CardLinks"
import { AddCard } from "./modals/AddCard"
import useDataStore from "../store/useDataStore"

export const Links = () => {
  const { links } = useDataStore(state => state)

  return (
    <Card isBlurred className="flex-1 overflow-auto w-full h-80">
      <CardHeader className="flex justify-between content-center items-center">
        <h2 className="text-lg font-semibold">
          Favorites Links
        </h2>
        <AddCard />
      </CardHeader>
      <CardBody className="grid grid-cols-4 grid-flow-row gap-4">
        {links.length ? links.map((link, i) => (
          <CardLinks key={i} id={i} title={link.title} links={link.links} />
        )) : (
          <p>No links found</p>
        )}
      </CardBody>
    </Card>
  )
}
