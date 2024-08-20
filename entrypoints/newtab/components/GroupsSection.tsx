import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { Group } from "./Group"
import { AddEditGroup } from "./modals/AddEditGroup"
import useDataStore from "../store/useDataStore"
import { Heart } from "lucide-react"

export const GroupsSection = () => {
  const { groups } = useDataStore(state => state)

  return (
    <Card shadow="none" className="bg-transparent flex-1 overflow-auto w-full h-[21rem]">
      <CardHeader className="flex justify-between content-center items-center">
        <h2 className="text-lg font-semibold inline-flex gap-2 content-center items-center">
          <Heart />
          Favorites Links
        </h2>
        <AddEditGroup />
      </CardHeader>
      <CardBody className="grid grid-cols-4 grid-flow-row gap-4">
        {groups.length ? groups.map((link, i) => (
          <Group key={i} id={i} title={link.title} links={link.links} />
        )) : (
          <p>No links found</p>
        )}
      </CardBody>
    </Card>
  )
}
