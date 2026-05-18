import { AppState } from "@/types";
import { create } from "zustand";

const initialState = {
     sidebarOpen: true,
     user: null,
};

export const useAppStore = create<AppState>()((set) => ({
     ...initialState,
     setSidebarOpen: (open) => set({ sidebarOpen: open }),
     toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
     setUser: (user) => set({ user }),
     reset: () => set(initialState),
}));