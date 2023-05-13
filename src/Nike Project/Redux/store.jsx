import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Redux/couterSlice";
import userReducer from "../Redux/userSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

export default store;
