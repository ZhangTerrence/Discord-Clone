import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { UserResult as UserState } from "./userApiSlice";

const initialState = {
  _id: "",
  username: "",
  email: "",
  hashedPassword: "",
  profilePicture: "",
  biography: "",
  friends: [],
  guilds: [],
  privateMessages: [],
}

const slice = createSlice({
  name: "user",
  initialState: initialState as UserState,
  reducers: {
    setUser: (_state, action: PayloadAction<UserState>) => action.payload
  },
})

export const { setUser } = slice.actions;

export default slice.reducer;
