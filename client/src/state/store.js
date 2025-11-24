import { configureStore } from "@reduxjs/toolkit";

import AuthenticateReducer from "./authenticate/AuthenticateSlicer";

const store = configureStore({
  reducer: {
    authenticate: AuthenticateReducer,
  },
});

export default store;
