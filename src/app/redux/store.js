import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";

export const makeStore = () => {
  return configureStore({
    reducer: {data : rootReducer},
  });
};
