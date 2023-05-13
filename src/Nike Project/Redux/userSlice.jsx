import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  listUser: [],
  dataUserLogin: null,
};

const notify = (key, text) => {
  switch (key) {
    case "success":
      toast.success(text, {
        position: toast.POSITION.TOP_LEFT,
      });
      break;

    case "error":
      toast.error(text, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
  }
};

export const userSlice = createSlice({
  name: "listUser",
  initialState,

  reducers: {
    callApiUser: (state, action) => {
      state.listUser = action.payload;
    },

    userLogin: (state, action) => {
      state.dataUserLogin = action.payload;
    },

    userRegister: (state, action) => {
      let index = state.listUser.findIndex(
        (user) => user.email === action.payload.emailAddress
      );

      if (index !== -1) {
        notify("error", "Email already exists");
      } else {
        axios({
          method: "post",
          url: "https://637b5d216f4024eac20b7454.mockapi.io/user-nike",
          data: {
            email: action.payload.emailAddress,
            password: action.payload.password,
            fistname: action.payload.fistname,
            lastName: action.payload.lastName,
            birth: action.payload.dateBirth,
            country: action.payload.country,
            gender: action.payload.gender,
            checkbox: action.payload.checkbox,
          },
        });
      }
    },
  },
});

export const { callApiUser, userLogin, userRegister } = userSlice.actions;

export default userSlice.reducer;
