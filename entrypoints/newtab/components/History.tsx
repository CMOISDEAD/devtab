import { Card, CardBody, CardHeader, Tab, Tabs } from "@nextui-org/react"

export const History = () => {
  return (
    <div className="flex flex-col gap-2 h-full">
      <Tabs aria-label="sections">
        <Tab key="history" title="history" className="h-full">
          <Card className="h-full">
            <CardHeader>
              <h2 className="text-2xl font-bold">History</h2>
            </CardHeader>
            <CardBody>
              History
            </CardBody>
          </Card>
        </Tab>
        <Tab key="bookmarks" title="Bookmarks" className="h-full">
          <Card className="h-full">
            <CardHeader>
              <h2 className="text-2xl font-bold">Bookmarks</h2>
            </CardHeader>
            <CardBody>
              Bookmarks
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  )
}
