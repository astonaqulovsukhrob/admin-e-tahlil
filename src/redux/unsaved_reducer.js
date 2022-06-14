import { configureStore } from "@reduxjs/toolkit";
import stored__reducer from "./stored_reducer";

export const store = configureStore({
  reducer: {
    unsaved__reducer: stored__reducer,
  },
});
