import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const authenticateSlice = createSlice({
  name: "authenticate",
  initialState,
  reducers: {
    access: (state) => {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
});

export const { access } = authenticateSlice.actions;
export default authenticateSlice.reducer;
