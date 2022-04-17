import { createAsyncThunk } from "@reduxjs/toolkit";
import axios                from "axios";
import { IUser }            from "../../models/IUser";




export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users?_limit=20")
      return response.data;
    } catch (error) {
      return rejectWithValue("Could not fetch users...");
    }
  }
)


export const asyncUserActions = {
  fetchUsers
}
