import { configureStore } from "@reduxjs/toolkit";
import LoginModalReducer from "../features/loginModal";
import RegisterModalReducer from "../features/registerModal";
import LoginStatusReducer from "../features/loginStatus";
import CurrentStudentReducer from "../features/currentStudent";
import CurrentClassReducer from "../features/currentClass";
import AddClassModal from "../features/addClassModal";
import ChangeGradeModalReducer from "../features/changeGradeModal";
import AddAssignmentModalReducer from "../features/addAssignmentModal";
import CompletedModalReducer from "../features/completedModal";

const store = configureStore({
  reducer: {
    LoginModalReducer,
    RegisterModalReducer,
    LoginStatusReducer,
    CurrentStudentReducer,
    CurrentClassReducer,
    AddClassModal,
    ChangeGradeModalReducer,
    AddAssignmentModalReducer,
    CompletedModalReducer,
  },
});

export default store;
