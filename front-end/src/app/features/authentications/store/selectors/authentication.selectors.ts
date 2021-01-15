import { createSelector } from "@ngrx/store";
import { ApplicationState } from "src/app/store/reducers";

export const selectorState = (state: ApplicationState) => state.authenticate;

export const isLoggedIn = createSelector(
  selectorState,
  (state) => !! state.user
);
