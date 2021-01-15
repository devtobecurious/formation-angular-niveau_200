import { createSelector } from "@ngrx/store";
import { ApplicationState } from "src/app/store/reducers";
import * as fromCounter  from '../reducers/counter.reducer';

export const selectorState = (state: ApplicationState) => state.counter;

export const defaultSelector = createSelector(selectorState,
                                              (state: fromCounter.State) => state.value);

// On peut utiliser d'anciens selector pour en construire d'autres
export const monSelectorChiffresPair = createSelector(defaultSelector,
                                                      (value) => value % 0)
