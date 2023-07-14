import { configureStore } from "@reduxjs/toolkit";
import { serverApi } from "./services/server";
import UserReducer from "../features/user/userSlice";
import AuthReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [serverApi.reducerPath]: serverApi.reducer,
    auth: AuthReducer,
    user: UserReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serverApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;