import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface DataState {
  username: string;
  profileImage: string;
  backgroundImage: string;
  groups: GroupType[] | [];
  youtubeChannels: string[];
  setUsername: (username: string) => void;
  setProfileImage: (profileImage: string) => void;
  setBackgroundImage: (backgroundImage: string) => void;
  setGroups: (groups: GroupType[] | []) => void;
  setYoutubeChannels: (youtubeChannels: string[]) => void;
}

const useDataStore = create<DataState>()(persist((set) => ({
  username: "user",
  profileImage: "https://github.com/CMOISDEAD.png",
  backgroundImage: "",
  groups: [],
  youtubeChannels: [
    "UCxGgQhryT47LYlRswnQ41bg",
    "UCccpWXiJ8cNjiuHvSDE3eOg"
  ],
  setUsername: (username) => set({ username }),
  setProfileImage: (profileImage) => set({ profileImage }),
  setBackgroundImage: (backgroundImage) => set({ backgroundImage }),
  setGroups: (groups) => set({ groups }),
  setYoutubeChannels: (youtubeChannels) => set({ youtubeChannels }),
}),
  {
    name: 'home-storage',
    storage: createJSONStorage(() => localStorage),
  }
))

export default useDataStore;
