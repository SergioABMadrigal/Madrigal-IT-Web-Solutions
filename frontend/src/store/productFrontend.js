import { create } from "zustand";

export const useProductStore = create((set) => ({
    
	products: [],
	setProducts: (products) => set({ products }),

	fetchProducts: async () => {
		const res = await fetch("api/products");
		const data = await res.json();
		set({ products: data.data.reverse() });
	},
	
}));
 