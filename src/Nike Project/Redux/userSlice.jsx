import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  listUser: [],
  dataUserLogin: null,
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
  },
});

export const { callApiUser, userLogin } = userSlice.actions;

export default userSlice.reducer;
