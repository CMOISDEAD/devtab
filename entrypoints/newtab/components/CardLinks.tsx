import { Card, CardBody, CardHeader, Link } from "@nextui-org/react";

interface Props {
  title: string,
  links: Array<{ title: string, url: string }>
}

export const CardLinks = ({ title, links }: Props) => {
  return (
    <Card className="w-60">
      <CardHeader>
        <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
      </CardHeader>
      <CardBody>
        <ul>
          {links.map((link, i) => (
            <li key={i}>
              <Link isExternal showAnchorIcon href={link.url} className="line-clamp-1">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  )
}
