import { create } from "zustand";

interface DataState {
  username: string;
  image: string;
  links: ISection | [];
  setUsername: (username: string) => void;
  setImage: (image: string) => void;
  setLinks: (links: ISection | []) => void;
}

const useDataStore = create<DataState>()((set) => ({
  username: "",
  image: "",
  links: [],
  setUsername: (username) => set({ username }),
  setImage: (image) => set({ image }),
  setLinks: (links) => set({ links }),
}))

export default useDataStore;
