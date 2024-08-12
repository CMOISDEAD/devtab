import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface DataState {
  username: string;
  image: string;
  links: ISection | [];
  setUsername: (username: string) => void;
  setImage: (image: string) => void;
  setLinks: (links: ISection | []) => void;
}

const useDataStore = create<DataState>()(persist((set) => ({
  username: "user",
  image: "https://github.com/CMOISDEAD.png",
  links: [],
  setUsername: (username) => set({ username }),
  setImage: (image) => set({ image }),
  setLinks: (links) => set({ links }),
}),
  {
    name: 'home-storage',
    storage: createJSONStorage(() => localStorage),
  }
))

export default useDataStore;
