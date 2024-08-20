import { SubmitHandler, useForm } from "react-hook-form";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Input, Tooltip } from "@nextui-org/react";
import { Pen, Plus } from "lucide-react";
import useDataStore from "../../store/useDataStore";

interface Inputs {
  title: string
}

interface Props {
  id?: number
  isEdit?: boolean,
  title?: string
}

export const AddEditGroup = ({ id, isEdit, title = "" }: Props) => {
  const { groups, setGroups } = useDataStore(state => state);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      title
    }
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (isEdit) return handleEdit(data);
    handleAdd(data)
  };

  const handleAdd = ({ title }: Inputs) => {
    const newGroup = {
      title,
      links: []
    }
    setGroups([...groups, newGroup])

  }

  const handleEdit = ({ title }: Inputs) => {
    if (id === undefined) return;
    const updated = [...groups]
    updated[id] = {
      ...updated[id],
      title
    }
    setGroups(updated)
  }

  return (
    <>
      <Tooltip content={isEdit ? "Edit Group" : "Add Group"}>
        <Button isIconOnly size="sm" variant="light" onPress={onOpen}>
          {isEdit ? <Pen className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
        </Button>
      </Tooltip>
      <Modal size="sm" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {isEdit ? "Update Card" : "Add New Card"}
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 mb-3">
              <Input placeholder="Documents" label="Title" {...register("title", { required: true })} variant="flat" />
              <Button size="sm" color="primary" type="submit">
                {isEdit ? "Update" : "Save"}
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
