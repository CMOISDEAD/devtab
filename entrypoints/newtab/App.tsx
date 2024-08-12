import { History } from "./components/History";
import { Links } from "./components/Links";
import { SearchBar } from "./components/SearchBar";
import { Sidebar } from "./components/Sidebar";
import { Welcome } from "./components/Welcome";
import useDataStore from "./store/useDataStore";

function App() {
  const { backgroundImage } = useDataStore(state => state);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
  }, [backgroundImage])

  return (
    <div className="flex gap-2 backdrop-blur-sm p-5 h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col justify-between w-full">
        <Welcome />
        <div className="flex flex-col gap-2">
          <SearchBar />
          <div className="flex content-center items-center gap-2">
            <Links />
            <History />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
