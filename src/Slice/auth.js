// src/redux/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, thunkAPI) => {
    const response = await axios.post(
      "http://localhost:8000/user/login/",
      credentials
    );
    return response.data;
  }
);

export const checkUser = createAsyncThunk(
  "auth/checkUser",
  async (_, thunkAPI) => {
    const response = await axios.get(
      "http://localhost:8000/dj-rest-auth/user/"
    );
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    status: "idle",
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isAuthenticated = action.payload.user;
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
