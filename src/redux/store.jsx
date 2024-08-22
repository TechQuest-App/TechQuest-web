import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./courses/CoursesSlice";

const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});

export default store;
