import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthInterface {
  accessToken: string | null
}

const slice = createSlice({
  name: "auth",
  initialState: { accessToken: null } as AuthInterface,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthInterface>) => {
      state.accessToken = action.payload.accessToken
    },
    logout: (state) => {
      state.accessToken = null
    }
  },
})

export const { setCredentials } = slice.actions;

export default slice.reducer;
