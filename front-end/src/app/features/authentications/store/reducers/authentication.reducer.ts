import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/core/models/users/user";
import * as fromActions from '../actions/authentication.actions';

export interface State {
  user: User
}

export const initialState: State = {
  user: undefined
};

export const reducer = createReducer(
  initialState,
  on(fromActions.loginSuccess, (state, action) => ({ user: action.user}))
);
