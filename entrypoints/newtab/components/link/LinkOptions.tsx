import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, useDisclosure } from "@nextui-org/react"
import { Menu, Pen, Trash } from "lucide-react"
import useDataStore from "../../store/useDataStore"
import { AddEditModal } from "../modals/AddLink"

interface Props {
  link: { title: string, url: string },
  link_id: number
  group_id: number
}

export const LinkOptions = ({ link, link_id, group_id }: Props) => {
  const { groups, setGroups } = useDataStore(state => state)
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleRemove = () => {
    const newGroups = [...groups]
    newGroups[group_id].links = newGroups[group_id].links.filter((_, i) => i !== link_id)
    setGroups(newGroups)
  }

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly size="sm">
            <Menu className="w-3 h-3" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu variant="light">
          <DropdownSection title="Link Options">
            <DropdownItem startContent={<Pen className="w-3 h-3" />} onPress={onOpen}>
              Edit
            </DropdownItem>
            <DropdownItem color="danger" startContent={<Trash className="w-3 h-3" />} onPress={handleRemove} >
              Delete
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
      <AddEditModal isEdit link={link} isOpen={isOpen} onOpenChange={onOpenChange} group_id={group_id} link_id={link_id} />
    </>
  )
}
