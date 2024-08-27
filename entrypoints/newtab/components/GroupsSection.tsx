import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { Group } from "./Group"
import { AddEditGroup } from "./modals/AddEditGroup"
import { Heart } from "lucide-react"
import useDataStore from "../store/useDataStore"

export const GroupsSection = () => {
  const { groups } = useDataStore(state => state)

  return (
    <div className="bg-transparent flex-1 w-full h-[19rem]">
      <div className="flex justify-between content-center items-center py-2">
        <h2 className="text-lg font-semibold inline-flex gap-2 content-center items-center">
          <Heart />
          Favorites Links
        </h2>
        <AddEditGroup />
      </div>
      <div className="h-full overflow-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-5 px-3 py-1">
        {groups.length ? groups.map((link, i) => (
          <Group key={i} id={i} title={link.title} links={link.links} />
        )) : (
          <p className="text-xs text-center">No groups found</p>
        )}
      </div>
    </div>
  )
}
