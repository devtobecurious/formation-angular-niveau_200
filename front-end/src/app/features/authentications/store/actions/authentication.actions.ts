import { createAction, props } from "@ngrx/store";
import { User } from "src/app/core/models/users/user";

export enum AuthenticationType {
  login = '[Login page] Login action',
  loginSuccess = '[Login effect] Log in effect ok',
}

export const login = createAction(AuthenticationType.login, props<{ user: User }>()); // this.store.dispatch(login(new User(email, password)))
export const loginSuccess = createAction(AuthenticationType.loginSuccess, props<{ user: User }>());
