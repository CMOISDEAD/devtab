import { History } from "./components/History";
import { Links } from "./components/Links";
import { Sidebar } from "./components/Sidebar";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <div className="flex gap-2 backdrop-blur-sm p-5 h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col justify-between w-full">
        <Welcome />
        <div className="flex content-center items-center gap-2">
          <Links />
          <History />
        </div>
      </main>
    </div>
  );
}

export default App;
