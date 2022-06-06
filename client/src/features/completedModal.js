import { createSlice } from "@reduxjs/toolkit";

export const CompletedModal = createSlice({
  name: "CompletedModal",
  initialState: { isModal: false },
  reducers: {
    setIsModal: (state) => {
      state.isModal = !state.isModal;
    },
  },
});

export const completedModalActions = CompletedModal.actions;

export default CompletedModal.reducer;
