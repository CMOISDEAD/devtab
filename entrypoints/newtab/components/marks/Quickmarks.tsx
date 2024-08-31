import { Card, CardBody, CardHeader } from "@nextui-org/react"

export const Quickmarks = () => {
  const [bookmarks, setBookmarks] = useState([])

  return (
    <Card className="h-[17rem] w-52 flex-1">
      <CardHeader>
        <h2 className="text-xl font-bold">Quickmarks</h2>
      </CardHeader>
      <CardBody>
        {!bookmarks.length ? (
          <p className="text-xs text-gray-500 text-center">
            You have no quickmarks yet. Add some by opening the extension.
          </p>
        ) : (
          null
        )}
      </CardBody>
    </Card>
  )
}
