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

      state.quantity++;
    },
    remove: (state, { payload }) => {
      state.cartData = state.cartData.filter((data) => data.id != payload.id);
      state.totalAmount -= payload.price;
      state.quantity--;
      // console.log(state.quantity);
    },
    increase: (state, { payload }) => {
      state.cartData?.map((data) => {
        if (data.id == payload) {
          data.quantity += 1;
          // data.price *=
          state.totalAmount += data.price;
          state.quantity++;
        } else {
          return data;
        }
      });
      // console.log(state.cartData);
    },
    decrease: (state, { payload }) => {
      state.cartData?.map((data) => {
        if (data.id == payload) {
         if(data.quantity >1){
           data.quantity -= 1;
           // data.price *=
           state.totalAmount -= data.price;
           state.quantity--;
         }
        } else {
          return data;
        }
      });
      // console.log(state.cartData);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, remove, increase,decrease } = cartSlice.actions;

export default cartSlice.reducer;
