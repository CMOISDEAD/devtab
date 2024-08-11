import { Links } from "./components/Links";
import { Sidebar } from "./components/Sidebar";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex flex-col justify-between p-5">
        <Welcome />
        <Links />
      </main>
    </div>
  );
}

export default App;
