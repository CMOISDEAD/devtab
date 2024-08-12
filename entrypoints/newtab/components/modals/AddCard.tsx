import { SubmitHandler, useForm } from "react-hook-form";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Input } from "@nextui-org/react";
import { Plus } from "lucide-react";
import useDataStore from "../../store/useDataStore";

interface Inputs {
  title: string
}

export const AddCard = () => {
  const { links, setLinks } = useDataStore(state => state);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = ({ title }) => {
    const newLinks = {
      title,
      links: []
    }
    setLinks([...links, newLinks])
  };

  return (
    <>
      <Button isIconOnly size="sm" variant="light" onPress={onOpen}>
        <Plus className="w-3 h-3" />
      </Button>
      <Modal size="sm" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Add New Card</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 mb-3">
              <Input placeholder="Documents" label="Title" {...register("title", { required: true })} variant="flat" />
              <Button size="sm" color="primary" type="submit">
                Create Card
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
