import { createSlice } from "@reduxjs/toolkit";

export const registerModalSlice = createSlice({
  name: "registerModal",
  initialState: { isRegisterModal: false },
  reducers: {
    setIsRegisterModal: (state) => {
      state.isRegisterModal = !state.isRegisterModal;
    },
  },
});

export const registerModalActions = registerModalSlice.actions;
export default registerModalSlice.reducer;
