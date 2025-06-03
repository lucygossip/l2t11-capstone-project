import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    totalCost: 0,
    cartItems: [],
  },
  reducers: {
    addCartItem: (state, action) => {
        state.cartItems.push(action.payload);
    },
    updateTotalCost: (state, action) => {
        state.totalCost += action.payload;
        state.totalCost = Number(state.totalCost.toFixed(2));
        console.log(current(state));
    }
  },
});

export const { addCartItem, updateTotalCost } = cartSlice.actions;
//Export the reducer function to be used in the store
export default cartSlice.reducer;
