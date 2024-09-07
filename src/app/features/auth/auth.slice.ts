import { createSlice } from "@reduxjs/toolkit";
import { forgotPassword, login, resetPassword, signup } from "./auth.thunk";
import initialAuthState from "./auth.initialstate";

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    logout: (state) => {
      return initialAuthState;
    },
    socialLogin: (state, action) => {
      state.user = action.payload;
    },
    signUp: (state, action) => {
      state.user = action.payload?.user;
      state.token = action.payload?.token.accessToken;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.payload?.user;
      state.token = action.payload.payload?.token;
      state.message = action.payload.message;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
    });

    builder.addCase(signup.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload?.message;
    });

    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
    });

    builder.addCase(forgotPassword.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload?.message;
    });

    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.loading = false;
    });

    builder.addCase(resetPassword.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    });

    builder.addCase(resetPassword.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { logout, socialLogin, signUp } = authSlice.actions;
export default authSlice.reducer;
