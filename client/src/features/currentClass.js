import { createSlice } from "@reduxjs/toolkit";

export const currentClass = createSlice({
  name: "currentClass",
  initialState: { class: {}, isClass: false },
  reducers: {
    setCurrentClass: (state, action) => {
      state.class = action.payload;
    },
    setIsClass: (state, action) => {
      state.isClass = action.payload;
    },
    addAssignment: (state, action) => {
      state.class.grade = action.payload.newGrade;
    },
  },
});

export const currentClassActions = currentClass.actions;

export default currentClass.reducer;
