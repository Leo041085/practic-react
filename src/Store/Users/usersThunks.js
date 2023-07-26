import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers } from "Api/user";


export const getAllUsersThunk = createAsyncThunk(
    'users/getUsers',
    async(_, {rejectWithValue})=>{
        try{
            const allUsers = await getAllUsers()
            return allUsers
        }
        catch(error){
            return rejectWithValue(error.message)
        }
    })

// Для цієї логіки необхідно використати об'єкт error в методі handleRejected, який прописаний у слайсі
//export const getAllUsersThunk = createAsyncThunk('users/getUsers', ()=>getAllUsers())