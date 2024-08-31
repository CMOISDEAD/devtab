import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { useYoutube } from "../../hooks/useYoutube"
import { YtVideo } from "./YtVideo";

export const YtCarousel = () => {
  const { error, videos } = useYoutube({ maxResults: 5 });

  return (
    <Card className="w-96 h-40 overflow-y-auto">
      <CardHeader>
        <h3 className="text-lg font-semibold">
          Youtube
        </h3>
      </CardHeader>
      <CardBody className="h-fit flex flex-col gap-2">
        {!error ? videos.map((video: VideoType) => (
          <YtVideo key={video.id} {...video} />
        )) : (
          <p className="text-xs text-center">
            {error}
          </p>
        )}
      </CardBody>
    </Card>
  )
}
