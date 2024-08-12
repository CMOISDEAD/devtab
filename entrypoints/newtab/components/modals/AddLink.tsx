import { SubmitHandler, useForm } from "react-hook-form";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Input } from "@nextui-org/react";
import { Plus } from "lucide-react";

import useDataStore from "../../store/useDataStore";

interface Inputs {
  title: string;
  url: string;
}

export const AddLink = ({ id }: { id: number }) => {
  const { links, setLinks } = useDataStore(state => state);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newLinks = [...links];
    newLinks[id].links.push(data);
    setLinks(newLinks);
  };

  return (
    <>
      <Button isIconOnly size="sm" variant="light" onPress={onOpen}>
        <Plus className="w-3 h-3" />
      </Button>
      <Modal size="xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Settings</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 mb-3">
              <Input placeholder="Reddit" label="Title" {...register("title", { required: true })} variant="flat" />
              <Input placeholder="reddit.com" label="Url" {...register("url", { required: true })} />
              <Button size="sm" color="primary" type="submit">Add Link</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
