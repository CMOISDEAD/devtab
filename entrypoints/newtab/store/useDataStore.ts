import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface DataState {
  username: string;
  profileImage: string;
  backgroundImage: string;
  links: ISection[] | [];
  setUsername: (username: string) => void;
  setProfileImage: (profileImage: string) => void;
  setBackgroundImage: (backgroundImage: string) => void;
  setLinks: (links: ISection[] | []) => void;
}

const useDataStore = create<DataState>()(persist((set) => ({
  username: "user",
  profileImage: "https://github.com/CMOISDEAD.png",
  backgroundImage: "",
  links: [],
  setUsername: (username) => set({ username }),
  setProfileImage: (profileImage) => set({ profileImage }),
  setBackgroundImage: (backgroundImage) => set({ backgroundImage }),
  setLinks: (links) => set({ links }),
}),
  {
    name: 'home-storage',
    storage: createJSONStorage(() => localStorage),
  }
))

export default useDataStore;
