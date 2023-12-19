import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
const initialState = {
  grades: null,
  // isAuthenticated: false,
  // token: null,
  status: "idle",
  error: null,
};

/**
 * authSlice is a reducer function that accepts state and action as arguments,
 * and returns the next state of the app.
 */
const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    fetchGrades: (state, action) => {
      state.grades = action.payload;
    },
  },
});

export const { fetchGrades } = courseSlice.actions;
export default courseSlice.reducer;
