import { Image } from "@nextui-org/react"

export const Welcome = () => {
  return (
    <div className="flex content-center items-center justify-center gap-10 w-fit">
      <Image src="https://github.com/CMOISDEAD.png" className="w-32" />
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome, Camilo</h1>
        <p className="text-lg mt-3">This is a simple new tab extension.</p>
        <div className="flex justify-center items-center gap-5 mt-3">
          <p>Wednesday</p>
          <p>2:00 PM</p>
          <p>Sunny</p>
        </div>
      </div>
    </div>
  )
}
