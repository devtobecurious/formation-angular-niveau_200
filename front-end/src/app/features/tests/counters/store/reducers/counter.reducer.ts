import { createReducer, on } from "@ngrx/store";
import * as fromActions from '../actions/counter.actions';

export interface State {
  value: number;
}

export const initialState: State = {
  value: 0
}

export const reducer = createReducer(
  initialState,
  on(fromActions.increment, state => ({ value: state.value + 1 }) ), // const nouveauEtat: State = { value: state.value + 1 }
  on(fromActions.decrement, state => ({ value: state.value - 1 }) ),
  on(fromActions.reset, state => ({ value: 0 }) ),
);
