import { serverApi } from "../../apps/services/server";

export interface LoginInterface {
  email: string,
  password: string
}

export interface SignupInterface extends LoginInterface {
  username: string
}

export const authApiSlice = serverApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials: LoginInterface) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials }
      })
    })
  })
})

export const { useLoginMutation } = authApiSlice;