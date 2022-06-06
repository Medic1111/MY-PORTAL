import { createSlice } from "@reduxjs/toolkit";

export const addClassModal = createSlice({
  name: "addClassModal",
  initialState: { isModal: false },
  reducers: {
    setIsModal: (state) => {
      state.isModal = !state.isModal;
    },
  },
});

export const addClassModalActions = addClassModal.actions;

export default addClassModal.reducer;
