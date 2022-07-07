import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { history } from "../history";
interface ProductsState {
  categories: Array<string>;
  items: Array<object>;
}

const initialState: ProductsState = {
  categories: [],
  items: [],
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Array<string>>) => {
      state.categories = action.payload;
    },
    setItems: (state, action: PayloadAction<Array<object>>) => {
      state.items = action.payload;
    },
  },
});

export const fetchItems = (action: string) => {
  return async (dispatch: any) => {
    const response = await fetch(`http://localhost:4000/api/items?q=${action}`);

    if (response.status === 400) {
      history.push("/error");
    }

    response
      .json()
      .then((data) => {
        dispatch(setCategories(data.categories));
        dispatch(setItems(data.items));
        history.push("/");
      })
      .catch((err) => console.error(err));
  };
};

export const { setCategories, setItems } = ProductsSlice.actions;
export default ProductsSlice.reducer;
