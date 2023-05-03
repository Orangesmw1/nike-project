import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listProduct: [],
  listShowCart: [],
};

export const counterSlice = createSlice({
  name: "listProduct",
  initialState,

  reducers: {
    callApi: (state, action) => {
      state.listProduct = action.payload;
    },

    upArrShowCart: (state, action) => {
      state.listShowCart.push(action.payload);
    },
  },
});

export const { callApi, upArrShowCart } = counterSlice.actions;

export default counterSlice.reducer;
