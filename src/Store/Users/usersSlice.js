import { createSlice } from '@reduxjs/toolkit';
import { getAllUsersThunk } from './usersThunks';
import initialState from './initialState';

function handlePending(state){
    state.users.isLoading = true
    state.users.error = null
}

function handleRejected(state, {payload}){
    state.users.isLoading = false
    state.users.error = payload
}

//Використовуємо коли немає try catch та rejectWithValue
// function handleRejected(state, {error}){
//     state.isLoading = false
//     state.error = error.message
// }

function handleFulfilled(state, {payload}){    
    state.users.isLoading = false
    if(payload.page>1){
      state.users.items.push(...payload.users)
    }else{
      state.users.items = payload.users
    }
    state.users.total = payload.total
    state.users.page = payload.page
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilter: (state, {payload})=>{state.filter = payload}
  },
  extraReducers: builder => {
    builder
    .addCase(getAllUsersThunk.pending, handlePending)
    .addCase(getAllUsersThunk.rejected, handleRejected)
    .addCase(getAllUsersThunk.fulfilled, handleFulfilled)
  },
});

export const {setFilter} = usersSlice.actions
export const usersReducer = usersSlice.reducer
