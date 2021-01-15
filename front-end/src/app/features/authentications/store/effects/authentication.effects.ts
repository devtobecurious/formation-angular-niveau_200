import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { concatMap, map } from "rxjs/operators";
import { AuthenticationService } from "src/app/shared/services/users/authentication.service";
import * as fromActions from '../actions/authentication.actions';

@Injectable()
export class AuthenticationEffect {
  constructor(private actions$: Actions, private service: AuthenticationService) {}

  login$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.login),
    concatMap(action => this.service.login(action.user)),
    map(user => fromActions.loginSuccess({ user: user}))
  ));
}
