import { serverApi } from "../../apps/services/server";

export interface UserResult {
  _id: string,
  username: string,
  email: string,
  hashedPassword: string,
  profilePicture: string,
  biography: string,
  friends: string[],
  guilds: string[],
  privateMessages: string[],
}

export const userApiSlice = serverApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<UserResult, string>({
      query: (id) => `/user/${id}`,
      providesTags: ["User"]
    }),
    addFriend: builder.mutation<UserResult, string>({
      query: (id) => `/user/friends/${id}`
    })
  }),
  overrideExisting: false
})

export const { useGetUserQuery, useAddFriendMutation } = userApiSlice;