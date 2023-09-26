import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
  quantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      if (!state.cartData.map((e) => e.id).includes(payload.id)) {
        state.cartData = [...state.cartData, { ...payload, quantity: 1 }];
        state.totalAmount += payload.price;
      }

      // state.quantity++;
      // console.log(state.quantity);
      // console.log(payload);
    },
    remove: (state, { payload }) => {
      // setTimeout(() => {
        state.cartData = state.cartData.filter((data) => data.id != payload.id);
        state.totalAmount -= payload.price;
      // }, 1000);
      // state.quantity--;
      // console.log(state.quantity);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, remove } = cartSlice.actions;

export default cartSlice.reducer;
