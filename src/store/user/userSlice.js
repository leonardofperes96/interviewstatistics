import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserThunk, loginUserThunk } from "./usersThunk";
import {
  addUserFromLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";
import { toast } from "react-toastify";

const initialState = {
  user: getUserFromLocalStorage(),
  isRegister: false,
  isLoading: false,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  registerUserThunk
);

export const loginUser = createAsyncThunk("user/loginUser", loginUserThunk);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleRegister: (state) => {
      state.isRegister = !state.isRegister;
    },
    logoutUser: (state, { payload }) => {
      state.user = null;
      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { user } = payload;
        state.user = user;
        addUserFromLocalStorage(user);
        toast.success(`Hello, ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { user } = payload;
        state.user = user;
        addUserFromLocalStorage(user);
        toast.success(`Welcome back, ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { toggleRegister, logoutUser } = userSlice.actions;

export default userSlice.reducer;
