import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: "",
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.userData = action.payload.userData;
      state.error = null;
    },
    loginFail: (state, action) => {
      state.error = action.payload.errorMessage;
    },
    logoutSuccess: (state, action) => {
      state.userData = "";
    },
  },
});

const { reducer, actions } = userSlice;
export const { loginSuccess, loginFail, logoutSuccess } = actions;
export default reducer;
