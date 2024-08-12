import { Image } from "@nextui-org/react"
import { Clock } from "./Clock"
import useDataStore from "../store/useDataStore"

export const Welcome = () => {
  const { profileImage, username } = useDataStore(state => state);

  return (
    <div className="flex content-center items-center gap-10 w-fit">
      <Image src={profileImage} className="w-32" />
      <div>
        <h1 className="text-4xl font-bold capitalize">Welcome, {username}</h1>
        <p className="text-lg mt-3">This is a simple new tab extension.</p>
        <Clock />
      </div>
    </div>
  )
}
