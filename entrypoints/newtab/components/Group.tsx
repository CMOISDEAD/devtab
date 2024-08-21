import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { DeleteGroup } from "./modals/DeleteGroup";
import { AddLink } from "./modals/AddLink";
import { AddEditGroup } from "./modals/AddEditGroup";
import { Link } from "./Link/Link";

interface Props {
  id: number,
  title: string,
  links: Array<{ title: string, url: string }>
}

export const Group = ({ id, title, links }: Props) => {
  return (
    <Card className="min-w-60 w-60 h-full flex-1">
      <CardHeader className="flex justify-between items-center">
        <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
      </CardHeader>
      <CardBody>
        <ul>
          {links.length ? links.map((link, i) => (
            <li key={i} className="my-2">
              <Link link={link} group_id={id} link_id={i} />
            </li>
          )) : (
            <p>No links found</p>
          )}
        </ul>
      </CardBody>
      <CardFooter className="flex content-center items-center justify-center gap-2">
        <AddEditGroup isEdit id={id} title={title} />
        <AddLink group_id={id} />
        <DeleteGroup group_id={id} />
      </CardFooter>
    </Card>
  )
}
