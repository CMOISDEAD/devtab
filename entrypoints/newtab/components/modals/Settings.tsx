import { SubmitHandler, useForm } from "react-hook-form";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea } from "@nextui-org/react";
import { Settings2 } from "lucide-react";

import useDataStore from "../../store/useDataStore";

interface Inputs {
  username: string;
  backgroundImage: string;
  profileImage: string;
  youtubeChannels: string;
}

export const Settings = () => {
  const { username, profileImage, backgroundImage, youtubeChannels } = useDataStore(state => state);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      username,
      profileImage,
      backgroundImage,
      youtubeChannels: youtubeChannels.join(","),
    }
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    useDataStore.setState({
      ...data,
      youtubeChannels: data.youtubeChannels.split(",").filter((channel) => channel.trim() !== "")
    });
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
              <Input placeholder="background image" label="Background Image" {...register("backgroundImage", {})} />
              <Input placeholder="profile image" label="Profile Image" {...register("profileImage", {})} />
              <Textarea
                label="Channels Ids"
                placeholder="youtube channels ids"
                description="add the youtube channels ids separated by commas"
                {...register("youtubeChannels", {})}
              />
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
