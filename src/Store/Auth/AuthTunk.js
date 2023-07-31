import { createAsyncThunk } from '@reduxjs/toolkit';
import { registration } from 'Api/Auth';

export const registrationThunk = createAsyncThunk(
  'auth/signUp',
  async (data, { rejectWithValue }) => {
    try { 
        const user = await registration(data);
        return user;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
  }
);
