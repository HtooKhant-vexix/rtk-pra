import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./service/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
