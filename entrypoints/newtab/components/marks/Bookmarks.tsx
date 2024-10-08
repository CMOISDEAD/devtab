import { Button, Card, CardBody, CardHeader, Link } from "@nextui-org/react"
import { ArrowDownIcon, Loader } from "lucide-react"
import { Bookmarks } from "wxt/browser"

export const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState<Bookmarks.BookmarkTreeNode[] | null>(null)

  useEffect(() => {
    browser.bookmarks.getTree()
      .then((tree) => {
        const data = tree[0].children
        setBookmarks(data || [])
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <Card className="h-[17rem] w-52">
      <CardHeader>
        <h2 className="text-xl font-bold">Bookmarks</h2>
      </CardHeader>
      <CardBody className="flex flex-col gap-2 overflow-auto">
        {bookmarks ? bookmarks.map((bookmark, i) => (
          <FolderComponent key={i} bookmark={bookmark} />
        )) : <Loader className="h-3 w-3 animate-spin text-gray-500" />}
      </CardBody>
    </Card>
  )
}



const FolderComponent = ({ bookmark }: { bookmark: Bookmarks.BookmarkTreeNode | null }) => {

  if (bookmark === null || bookmark.type !== "folder" || bookmark.children == undefined) return

  return (
    <div className="w-full">
      <div className="w-full text-sm font-bold flex justify-between gap-2 items-center">
        <h3>{bookmark.title}</h3>
        <ArrowDownIcon className="h-3 w-3" />
      </div>
      <div className="flex flex-col gap-1 justify-start items-start p-1">
        {!bookmark.children.length ? (
          <p className="w-full text-center text-xs text-gray-500">No bookmarks</p>
        ) : bookmark.children.map((child) => {
          return child.type === "folder" ? (
            <FolderComponent key={child.id} bookmark={child} />
          ) : (
            <Button fullWidth key={child.id} size="sm" as={Link} href={child.url}>
              {child.title}
            </Button>
          )
        }
        )}
      </div>
    </div>
  )
}
