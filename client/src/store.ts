import { configureStore } from "@reduxjs/toolkit";
import products from "./reducers/producst";
import product from "./reducers/product";

export const store = configureStore({
  reducer: {
    products,
    product,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
