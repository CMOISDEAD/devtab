import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from "@nextui-org/react";

import useDataStore from "../../store/useDataStore";
import { Trash } from "lucide-react";

export const DeleteCard = ({ id }: { id: number }) => {
  const { links, setLinks } = useDataStore(state => state)
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleRemove = () => {
    // TODO: should implement a better way to remove the card, uuid or something
    setLinks(links.filter((_, i) => i !== id))
    onClose()
  }

  return (
    <>
      <Button isIconOnly size="sm" variant="light" color="danger" onPress={onOpen}>
        <Trash className="w-3 h-3" />
      </Button>
      <Modal size="sm" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Delete Card</ModalHeader>
          <ModalBody className="mb-3">
            <Button color="danger" variant="light" onPress={handleRemove}>
              Are you sure ?
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
