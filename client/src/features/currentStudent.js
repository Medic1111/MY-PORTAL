import { createSlice } from "@reduxjs/toolkit";

export const currentStudent = createSlice({
  name: "currentStudent",
  initialState: { currentStudent: {}, currentClass: { assignments: [] } },
  reducers: {
    setCurrentStudent: (state, action) => {
      state.currentStudent = action.payload;
    },

    addClass: (state, action) => {
      state.currentStudent.classes.push(action.payload.newClass);
    },
    setCurrentClass: (state, action) => {
      let index = action.payload.index;
      state.currentClass = state.currentStudent.classes[index];
    },
    clearCurrentClass: (state) => {
      state.currentClass = {};
    },
    changeGrade: (state, action) => {
      let findToAlter = state.currentStudent.classes.find((obj, index) => {
        return obj.name === action.payload.name;
      });
      findToAlter.grade = action.payload.newGrade;
      state.currentClass = findToAlter;
    },
    addAssignment: (state, action) => {
      let findToAlter = state.currentStudent.classes.find((obj, index) => {
        return obj.name === action.payload.name;
      });

      findToAlter.assignments.push(action.payload.newAssignment);
      state.currentClass = findToAlter;
    },
    deleteAssignment: (state, action) => {
      let findToAlter = state.currentStudent.classes.find((obj, index) => {
        return obj.name === action.payload.name;
      });
      let newList = findToAlter.assignments.filter((item, index) => {
        return index !== action.payload.indexToDel;
      });

      findToAlter.assignments = newList;
      state.currentClass = findToAlter;
    },
    clearList: (state, action) => {
      let findClass = state.currentStudent.classes.find((obj, index) => {
        return obj.name === action.payload.name;
      });

      findClass.completed = [];

      state.currentClass = findClass;
    },
    addToCompleted: (state, action) => {
      let findClass = state.currentStudent.classes.find((obj, index) => {
        return obj.name === action.payload.name;
      });

      findClass.completed.push(action.payload.completedTask);

      state.currentClass = findClass;
    },
  },
});

export const currentStudentActions = currentStudent.actions;
export default currentStudent.reducer;
