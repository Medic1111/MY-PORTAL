import { createSlice } from "@reduxjs/toolkit";

export const changeGradeModal = createSlice({
  name: "changeGradeModal",
  initialState: { isModal: false },
  reducers: {
    setIsModal: (state) => {
      state.isModal = !state.isModal;
    },
  },
});

export const changeGradeModalModalActions = changeGradeModal.actions;

export default changeGradeModal.reducer;
