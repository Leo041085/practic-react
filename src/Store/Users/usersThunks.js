import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers } from "Api/user";

export const getAllUsersThunk = createAsyncThunk('users/getUsers', async(_, thunkAPI)=>{
    const allUsers = await getAllUsers()
    return allUsers
})