import { createAction } from "@ngrx/store"

export enum ActionsType {
  increment = '[Counter] Increment',
  decrement = '[Counter] Decrement',
  reset = '[Counter] Reset'
}

export const increment = createAction(ActionsType.increment);
export const decrement = createAction(ActionsType.decrement);
export const reset = createAction(ActionsType.reset);

