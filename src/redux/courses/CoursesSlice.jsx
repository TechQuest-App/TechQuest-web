import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

const CoursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses(state, action) {
      state.courses = action.payload;
    },
  },
});

export const { setCourses } = CoursesSlice.actions;
export default CoursesSlice.reducer;
