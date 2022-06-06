import { createSlice } from "@reduxjs/toolkit";

export const AddAssignmentModal = createSlice({
  name: "AddAssignmentModal",
  initialState: { isModal: false },
  reducers: {
    setIsModal: (state) => {
      state.isModal = !state.isModal;
    },
  },
});

export const addAssignmentModalActions = AddAssignmentModal.actions;

export default AddAssignmentModal.reducer;
