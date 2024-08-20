import { SubmitHandler, useForm } from "react-hook-form";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Input, Tooltip } from "@nextui-org/react";
import { Pen, Plus } from "lucide-react";

import useDataStore from "../../store/useDataStore";

interface Inputs {
  title: string;
  url: string;
}

interface Props {
  group_id: number,
  link_id?: number,
  isEdit?: boolean,

}

export const AddLink = ({ group_id, link_id, isEdit = false }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Tooltip content="Add Link">
        <Button isIconOnly size="sm" variant="light" onPress={onOpen}>
          {isEdit ? <Pen className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
        </Button>
      </Tooltip>
      <AddEditModal isEdit={isEdit} group_id={group_id} link_id={link_id} isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}

interface ModalProps {
  link?: LinkType,
  isEdit?: boolean,
  group_id: number,
  link_id?: number,
  isOpen: boolean,
  onOpenChange: () => void,
}

export const AddEditModal = ({ link = { title: "", url: "" }, isEdit = false, group_id, link_id, isOpen, onOpenChange }: ModalProps) => {
  const { groups, setGroups } = useDataStore(state => state);
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      ...link
    }
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (isEdit) return handleEdit(data);
    handleAdd(data);
  };

  const handleAdd = (data: Inputs) => {
    data.url = data.url.startsWith("http") ? data.url : `https://${data.url}`;
    const newLinks = [...groups];
    newLinks[group_id].links.push(data);
    setGroups(newLinks);
  }

  const handleEdit = (data: Inputs) => {
    if (link_id === undefined) return;
    data.url = data.url.startsWith("http") ? data.url : `https://${data.url}`;
    const newLinks = [...groups];
    newLinks[group_id].links[link_id] = data;
    setGroups(newLinks);
  }


  return (
    <Modal size="xl" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Add Link</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 mb-3">
            <Input placeholder="Reddit" label="Title" {...register("title", { required: true })} variant="flat" />
            <Input placeholder="reddit.com" label="Url" {...register("url", { required: true })} />
            <Button size="sm" color="primary" type="submit">
              {isEdit ? "Edit" : "Add"} Link
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
