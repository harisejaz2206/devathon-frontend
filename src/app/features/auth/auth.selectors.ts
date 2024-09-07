import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";

export const selectAuth = (state: RootState) => state.auth;

export const selectAuthUser = createSelector([selectAuth], (auth) => auth.user);

export const selectAuthToken = createSelector(
  [selectAuth],
  (auth) => auth.token
);

export const selectAuthMessage = createSelector(
  [selectAuth],
  (auth) => auth.message
);

export const selectAuthLoading = createSelector(
  [selectAuth],
  (auth) => auth.loading
);
