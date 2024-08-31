import { Image, Link } from "@nextui-org/react";
import { formatDistanceToNow } from "date-fns";


export const YtVideo = ({ title, link, thumbnail, publishedAt }: VideoType) => {
  return (
    <div className="h-36 w-full">
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-row content-center gap-2">
          <Image removeWrapper src={thumbnail} alt={title} className="w-28 h-22 object-cover" />
          <div className="py-2 flex flex-col justify-between gap-2 flex-1">
            <h3 className="text-xs">{title}</h3>
            <p className="text-xs text-gray-600">{formatDistanceToNow(publishedAt, { addSuffix: true })}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
