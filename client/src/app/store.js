import { configureStore } from "@reduxjs/toolkit";

import slicer from "./reducer/slicer";

export const store = configureStore({
  reducer: {
    reducer: slicer,
  },
});
