import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotal } from "./cartSlice";

import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
setupListeners(store.dispatch);
store.dispatch(getTotal());
