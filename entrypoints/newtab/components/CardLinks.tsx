import { Card, CardHeader, CardBody, Link, Button } from "@nextui-org/react";
import { Pen, Plus } from "lucide-react";

interface Props {
  title: string,
  links: Array<{ title: string, url: string }>
}

export const CardLinks = ({ title, links }: Props) => {
  return (
    <Card className="min-w-60 w-60">
      <CardHeader className="flex justify-between items-center">
        <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
        <div className="flex content-center items-center gap-2">
          <Button isIconOnly size="sm" variant="light">
            <Pen className="w-3 h-3" />
          </Button>
          <Button isIconOnly size="sm" variant="light">
            <Plus className="w-3 h-3" />
          </Button>
        </div>
      </CardHeader>
      <CardBody>
        <ul>
          {links ? links.map((link, i) => (
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
    </Card>
  )
}
