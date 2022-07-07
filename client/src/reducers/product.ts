import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { setCategories } from "./products";
import { history } from "../history";
interface ProductState {
  item: object;
}
const initialState: ProductState = {
  item: {},
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<Object>) => {
      state.item = action.payload;
    },
  },
});

export const fetchItem = (action: string) => {
  return async (dispatch: any, getSate: any) => {
    const response = await fetch(`http://localhost:4000/api/items/${action}`);
    const currentStateProducts = getSate().products;

    if (response.status === 400) {
      history.push("/error");
    }
    response
      .json()
      .then((data) => {
        dispatch(setItem(data.item));
        if (currentStateProducts.categories.length === 0) {
          dispatch(setCategories(data.category));
        }
      })
      .catch((err) => console.error(err));
  };
};

export const { setItem } = ProductSlice.actions;

export default ProductSlice.reducer;
