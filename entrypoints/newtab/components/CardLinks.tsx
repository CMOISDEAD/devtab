import { Card, CardHeader, CardBody, Link, Button, CardFooter } from "@nextui-org/react";
import { Pen, Plus } from "lucide-react";
import { DeleteCard } from "./modals/DeleteCard";
import { AddLink } from "./modals/AddLink";

interface Props {
  id: number,
  title: string,
  links: Array<{ title: string, url: string }>
}

export const CardLinks = ({ id, title, links }: Props) => {
  return (
    <Card shadow="none" className="min-w-60 w-60 h-64">
      <CardHeader className="flex justify-between items-center">
        <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
      </CardHeader>
      <CardBody>
        <ul>
          {links.length ? links.map((link, i) => (
            <li key={i} className="my-2">
              <Button size="sm" as={Link} isExternal showAnchorIcon href={link.url} className="w-full">
                {link.title}
              </Button>
            </li>
          )) : (
            <p>No links found</p>
          )}
        </ul>
      </CardBody>
      <CardFooter className="flex content-center items-center justify-center gap-2">
        <Button isIconOnly size="sm" variant="light">
          <Pen className="w-3 h-3" />
        </Button>
        <AddLink id={id} />
        <DeleteCard id={id} />
      </CardFooter>
    </Card>
  )
}
