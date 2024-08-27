import { Tab, Tabs } from "@nextui-org/react"
import { Quickmarks } from "./Quickmarks"
import { Bookmark } from "./Bookmarks"

export const Marks = () => {
  return (
    <div className="flex flex-col gap-2">
      <Tabs aria-label="sections">
        <Tab key="quickmarks" title="Quickmarks">
          <Quickmarks />
        </Tab>
        <Tab key="bookmarks" title="Bookmarks">
          <Bookmark />
        </Tab>
      </Tabs>
    </div>
  )
}
