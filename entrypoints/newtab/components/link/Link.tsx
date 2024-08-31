import { ButtonGroup, Button, Link as To } from "@nextui-org/react";
import { LinkOptions } from "./LinkOptions";

interface Props {
  link: { title: string, url: string }
  link_id: number,
  group_id: number
}

export const Link = ({ link, link_id, group_id }: Props) => {
  return (
    <ButtonGroup fullWidth size="sm" variant="flat">
      <Button as={To} isExternal showAnchorIcon href={link.url} className="w-full">
        {link.title}
      </Button>
      <LinkOptions link={link} link_id={link_id} group_id={group_id} />
    </ButtonGroup>

  )
}
