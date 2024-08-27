import { Card, CardBody, CardHeader } from "@nextui-org/react"

export const Quickmarks = () => {
  const [bookmarks, setBookmarks] = useState([])

  return (
    <Card className="h-[17rem] flex-1">
      <CardHeader>
        <h2 className="text-xl font-bold">Quickmarks</h2>
      </CardHeader>
      <CardBody>
        Bookmarks
      </CardBody>
    </Card>
  )
}
