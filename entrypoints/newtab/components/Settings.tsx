import { SubmitHandler, useForm } from "react-hook-form";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { Settings2 } from "lucide-react";
import useDataStore from "../store/useDataStore";

interface Inputs {
  username: string;
  backgroundImage: string;
  profileImage: string;
}

export const Settings = () => {
  const { username, profileImage, backgroundImage } = useDataStore(state => state);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      username,
      profileImage,
      backgroundImage
    }
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    useDataStore.setState(data);
    onClose();
  };

  return (
    <>
      <Button isIconOnly size="sm" variant="light" onPress={onOpen}>
        <Settings2 className="w-5 h-5" />
      </Button>
      <Modal size="xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Settings</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
              <Input placeholder="jhon doe" label="Username" {...register("username", { required: true })} variant="flat" />
              <Input placeholder="background image" label="Background Image" {...register("backgroundImage", { required: true })} />
              <Input placeholder="profile image" label="Profile Image" {...register("profileImage", { required: true })} />
              <Button size="sm" color="primary" type="submit">
                Save Configuration
              </Button>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button size="sm" color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
