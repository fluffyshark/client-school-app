import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserReducer";


export const store = configureStore({
  reducer: {
    user: UserSlice,
  },
});
