import { createAsyncThunk } from "@reduxjs/toolkit";
import { ISignUpInterface } from "./interfaces/signup.interface";
import { authService } from "../../services/auth.service";
import { ILogInInterface } from "./interfaces/login.interface";
import { IForgotPasswordInterface } from "./interfaces/forgotpassword.interface";
import { IResetPasswordInterface } from "./interfaces/resetpassword.interface";
import { log } from "console";

export const signup = createAsyncThunk(
  "auth/signup",
  async (credentials: ISignUpInterface, { rejectWithValue }) => {
    try {
      console.log("inside")
      const response = await authService.signupHandler(credentials);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while registering"
      );
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: ILogInInterface, thunkAPI) => {
    try {
      const response = await authService.loginHandler(credentials);
      console.log('response from thunk: ', response);
      return response;
    } catch (error: any) {
      console.log("error", error)
      return thunkAPI.rejectWithValue(
        error.response?.data || "Error during login"
      );
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (credentials: IForgotPasswordInterface, thunkAPI) => {
    try {
      const response = await authService.forgotPasswordHandler(credentials);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Error during password reset"
      );
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (
    {
      token,
      credentials,
    }: { token: string | undefined; credentials: IResetPasswordInterface },
    thunkAPI
  ) => {
    try {
      const response = await authService.resetPasswordHandler(
        token,
        credentials
      );
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Error during password reset"
      );
    }
  }
);
