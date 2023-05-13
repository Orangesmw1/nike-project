import { createSlice, current } from "@reduxjs/toolkit";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  listProduct: [],
  listShowCart: [],
};

const notify = (key) => {
  switch (key) {
    case "success":
      toast.success("Success Notification !", {
        position: toast.POSITION.TOP_LEFT,
      });
      break;
  }
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
        state.listShowCart[index].count += 1;
      } else {
        notify("success");

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
