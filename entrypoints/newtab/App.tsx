import { GroupsSection } from "./components/GroupsSection";
import { SearchBar } from "./components/SearchBar";
import { Sidebar } from "./components/Sidebar";
import { Welcome } from "./components/Welcome";
import { Marks } from "./components/marks/Marks";
import useDataStore from "./store/useDataStore";

function App() {
  const { backgroundImage } = useDataStore(state => state);

  useEffect(() => {
    if (!backgroundImage) return;
    document.body.style.backgroundImage = `url(${backgroundImage})`;
  }, [backgroundImage])

  return (
    <div className="flex gap-2 backdrop-blur-sm p-5 h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col justify-between w-full h-full">
        <Welcome />
        <div className="flex flex-col gap-2 h-96">
          <SearchBar />
          <div className="flex gap-2">
            <GroupsSection />
            <Marks />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
