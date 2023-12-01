import { create } from 'zustand';


interface CounterStore {
  counter: number;
  favoriteImages: string[];
  incrementWithFavorite: (src: string) => void;
  decrementWithRemove: (src: string) => void;
}

const useCounterStore = create<CounterStore>((set) => ({

  counter: 0,
  favoriteImages: [],

  loadFavoriteImages: () => {
    const storedImages = JSON.parse(localStorage.getItem('favoriteImages') || '[]');
    set({ favoriteImages: storedImages });
  },

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
