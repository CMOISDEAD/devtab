import { Button, Image } from "@nextui-org/react";
import { Github } from "lucide-react";
import WTX_LOGO from "/wxt.svg";

function App() {
  return (
    <div className="h-80 w-64 p-5 flex flex-col justify-between items-center content-center">
      <h1 className="text-2xl font-bold text-center">DEVTAB</h1>
      <Image src={WTX_LOGO} alt="DEVTAB logo" />
      <div className="flex flex-col gap-2 content-center items-center">
        <Button fullWidth startContent={<Github />}>
          Login with GitHub
        </Button>
        <p className="text-xs text-default text-center">
          Login to save your settings and enable some features.
        </p>
      </div>
    </div>
  );
}

export default App;
