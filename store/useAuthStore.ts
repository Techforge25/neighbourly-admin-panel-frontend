import { AppState } from "@/types";
import { create } from "zustand";

const initialState = {
     sidebarOpen: true,
     user: null,
     openSponsorShip: false
};

export const useAppStore = create<AppState>()((set) => ({
     ...initialState,
     setSidebarOpen: (open) => set({ sidebarOpen: open }),
     toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
     setUser: (user) => set({ user }),
     reset: () => set(initialState),
     setOpenEditPage: (open: boolean) =>
          set({ openSponsorShip: open }),
}));