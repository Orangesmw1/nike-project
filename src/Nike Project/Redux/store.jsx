import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Redux/couterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
