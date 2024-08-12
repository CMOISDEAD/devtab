import { Input } from "@nextui-org/react"
import { Search } from "lucide-react"

export const SearchBar = () => {
  return (
    <Input
      startContent={<Search />}
      placeholder="Search the web"
      variant="flat"
    />
  )
}
