import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    totalCost: JSON.parse(localStorage.getItem("totalCost")) || 0,
    cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addCartItem: (state, action) => {
      state.cartItems.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeCartItem: (state, action) => {
      state.cartItems.splice(action.payload, 1);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    updateTotalCost: (state, action) => {
      state.totalCost += action.payload;
      state.totalCost = Number(state.totalCost.toFixed(2));
      localStorage.setItem("totalCost", JSON.stringify(state.totalCost));
    },
    removeFromTotal: (state, action) => {
      state.totalCost -= action.payload;
      state.totalCost = Number(state.totalCost.toFixed(2));
      localStorage.setItem("totalCost", JSON.stringify(state.totalCost));
    },
  },
});

export const { addCartItem, removeCartItem, updateTotalCost, removeFromTotal } =
  cartSlice.actions;
//Export the reducer function to be used in the store
export default cartSlice.reducer;
