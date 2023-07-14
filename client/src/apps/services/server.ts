import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const serverApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api" }),
  tagTypes: ["Auth", "User"],
  endpoints: () => ({}) 
})