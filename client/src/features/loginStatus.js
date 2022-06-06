import { createSlice } from "@reduxjs/toolkit";

export const loginStatus = createSlice({
  name: "loginStatus",
  initialState: { isLoggedIn: false },
  reducers: {
    setIsLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const loginStatusActions = loginStatus.actions;
export default loginStatus.reducer;
