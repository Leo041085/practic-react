import { initialState } from './AuthInitialState';
import { createSlice } from '@reduxjs/toolkit';
import { registrationThunk } from './AuthTunk';

const handleFulfilledRegistration = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
};
function handlePending(state) {
  state.isLoading = true;
  state.error = null;
}

function handleRejected(state, { payload }) {
  state.isLoading = false;
  state.error = payload;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registrationThunk.fulfilled, handleFulfilledRegistration)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;


