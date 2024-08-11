import { Button, Card } from "@nextui-org/react"
import { Github, Home, Settings } from "lucide-react";

export const Sidebar = () => {
  return (
    <Card radius="none" className="h-screen w-fit p-2 flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <Button isIconOnly size="sm" variant="light">
          <Home className="w-5 h-5" />
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <Button isIconOnly size="sm" variant="light">
          <Github className="w-5 h-5" />
        </Button>
        <Button isIconOnly size="sm" variant="light">
          <Settings className="w-5 h-5" />
        </Button>
      </div>
    </Card>
  )
}
