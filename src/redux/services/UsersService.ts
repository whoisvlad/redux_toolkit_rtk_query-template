import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser }                     from "../models/IUser";




export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Users"],
  endpoints: (build) => ({
    // Get allUsers data with pagination
    fetchAllUsers: build.query<IUser[], number>({
      query: (limit: number = 5) => ({
        url: "/users",
        method: "GET",
        params: {
          _limit: limit,
        }
      }),
      providesTags: result => ["Users"]
    })
  })
})
