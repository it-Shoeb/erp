import { createslicer } from "@reduxjs/toolkit";

const initialState = {
  state: false,
};

export const slicer = createslicer({
  name: "slicer",
  initialState,
  reducers: {
    access: (state, action) => {
      state.state = action.payload;
    },
    denied: (state, action) => {
      state.state = action.payload;
    },
  },
});

export const { access, denied } = slicer.actions;
export default slicer.reducer;
