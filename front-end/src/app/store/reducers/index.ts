import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { CounterModule } from 'src/app/features/tests/counters/counter.module';
import { environment } from '../../../environments/environment';
import * as fromCounter from '../../features/tests/counters/store/reducers/counter.reducer';

export interface ApplicationState {
  ['counter']: fromCounter.State // ApplicationState['counter'] => ApplicationState.counter
}


export const reducers: ActionReducerMap<ApplicationState> = {
  ['counter']: fromCounter.reducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];
