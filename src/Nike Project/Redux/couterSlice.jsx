import { createSlice, current } from "@reduxjs/toolkit";

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
      const index = state.listShowCart.findIndex(
        (itemCheck, i) => itemCheck.id === action.payload.id
      );
      const itemUpdate = { ...action.payload, count: 1 };

      if (index !== -1) {
        console.log("trungf");
        state.listShowCart[index].count += 1;
      } else {
        state.listShowCart.push(itemUpdate);
      }
    },

    delItemCart: (state, action) => {
      state.listShowCart.splice(action.payload, 1);
    },
  },
});

export const { callApi, upArrShowCart, delItemCart } = counterSlice.actions;

export default counterSlice.reducer;
