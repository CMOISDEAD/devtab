import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface DataState {
  username: string;
  profileImage: string;
  backgroundImage: string;
  groups: GroupType[] | [];
  setUsername: (username: string) => void;
  setProfileImage: (profileImage: string) => void;
  setBackgroundImage: (backgroundImage: string) => void;
  setGroups: (groups: GroupType[] | []) => void;
}

const useDataStore = create<DataState>()(persist((set) => ({
  username: "user",
  profileImage: "https://github.com/CMOISDEAD.png",
  backgroundImage: "",
  groups: [],
  setUsername: (username) => set({ username }),
  setProfileImage: (profileImage) => set({ profileImage }),
  setBackgroundImage: (backgroundImage) => set({ backgroundImage }),
  setGroups: (groups) => set({ groups }),
}),
  {
    name: 'home-storage',
    storage: createJSONStorage(() => localStorage),
  }
))

export default useDataStore;
