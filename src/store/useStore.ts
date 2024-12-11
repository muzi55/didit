import { create } from "zustand";

interface yorestore {
	yourState: string;
	yourAction: (val: string) => void;
}
export const useyorestore = create<yorestore>(set => ({
	yourState: "VALUE",
	yourAction: () => set(state => ({ yourState: state.yourState })),
}));
