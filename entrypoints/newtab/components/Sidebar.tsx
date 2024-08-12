import { Button, Card, Link } from "@nextui-org/react"
import { Github, Home, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Settings } from "./modals/Settings";

export const Sidebar = () => {
  return (
    <Card className="h-[93.6vh] min-w-fit w-fit p-2 flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <Button isIconOnly size="sm" variant="light">
          <Home className="w-5 h-5" />
        </Button>
        <ThemeToggler />
      </div>
      <div className="flex flex-col gap-2">
        <Button isIconOnly isExternal size="sm" variant="light" as={Link} href="https://github.com/CMOISDEAD">
          <Github className="w-5 h-5" />
        </Button>
        <Settings />
      </div>
    </Card>
  )
}


const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Button
      isIconOnly
      size="sm"
      variant="light"
      onClick={handleTheme}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
