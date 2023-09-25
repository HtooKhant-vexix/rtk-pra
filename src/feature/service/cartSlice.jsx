import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData : [],
  quantity: 0,
  totalAmount: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart : (state, {payload})=>{
        state.cartData = [...state.cartData, { ...payload, quantity: 1 }];
        console.log(state.cartData);
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
