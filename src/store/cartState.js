import { createSlice } from "@reduxjs/toolkit";

/* Create slice for cart state */
const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    totalCost: JSON.parse(localStorage.getItem("totalCost")) || 0, // If available, get from local storage, else 0
    cartItems: JSON.parse(localStorage.getItem("cart")) || [], // If available, get from local storage, else []
  },
  reducers: {
    addCartItem: (state, action) => { // Add cart item
      state.cartItems.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeCartItem: (state, action) => { // Remove cart item
      state.cartItems.splice(action.payload, 1);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    updateTotalCost: (state, action) => { // Update total cost
      state.totalCost += action.payload;
      state.totalCost = Number(state.totalCost.toFixed(2));
      localStorage.setItem("totalCost", JSON.stringify(state.totalCost));
    },
    removeFromTotal: (state, action) => { // Remove from total cost
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
