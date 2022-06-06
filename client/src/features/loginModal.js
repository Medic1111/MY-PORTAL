import { createSlice } from "@reduxjs/toolkit";

export const loginModalSlice = createSlice({
  name: "loginModal",
  initialState: { isLoginModal: false },
  reducers: {
    setIsLoginModal: (state) => {
      state.isLoginModal = !state.isLoginModal;
    },
  },
});

export const loginModalActions = loginModalSlice.actions;
export default loginModalSlice.reducer;
