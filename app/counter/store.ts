import { create } from 'zustand';


let initialData:string[] = [];
if (typeof window !== "undefined" && window.localStorage) {
  initialData = JSON.parse(localStorage.getItem("favoriteImages") || "[]");
  console.log(initialData);
}

interface CounterStore {
  counter: number;
  favoriteImages: string[];
  incrementWithFavorite: (src: string) => void;
  decrementWithRemove: (src: string) => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  
  counter: initialData.length,
  favoriteImages: initialData || [],

  incrementWithFavorite: (src) =>
    set((state) => {
      const newImages = [...state.favoriteImages, src];
      localStorage.setItem("favoriteImages", JSON.stringify(newImages));
      return { favoriteImages: newImages, counter: state.counter + 1 };
    }),

  decrementWithRemove: (src) =>
    set((state) => {
      const newImages = state.favoriteImages.filter((url) => url !== src);
      localStorage.setItem("favoriteImages", JSON.stringify(newImages));
      return { favoriteImages: newImages, counter: state.counter - 1 >= 0 ? state.counter - 1 : 0 };
    }),
}));

export default useCounterStore;
