import { createSlice } from '@reduxjs/toolkit';
import { getAllUsersThunk } from './usersThunks';
import initialState from './initialState';

function handlePending(state){
    state.isLoading = true
    state.error = null
}

function handleRejected(state, {payload}){
    state.isLoading = false
    state.error = payload
}

//Використовуємо коли немає try catch та rejectWithValue
// function handleRejected(state, {error}){
//     state.isLoading = false
//     state.error = error.message
// }

function handleFulfilled(state, {payload}){    
    state.isLoading = false
    state.users = payload
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
    .addCase(getAllUsersThunk.pending, handlePending)
    .addCase(getAllUsersThunk.rejected, handleRejected)
    .addCase(getAllUsersThunk.fulfilled, handleFulfilled)
  },
});

export const usersReducer = usersSlice.reducer
