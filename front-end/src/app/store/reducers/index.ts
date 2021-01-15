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
import * as fromAuthentication from '../../features/authentications/store/reducers/authentication.reducer';

export interface ApplicationState {
  ['counter']: fromCounter.State // ApplicationState['counter'] => ApplicationState.counter
  ['authenticate']: fromAuthentication.State
}


export const reducers: ActionReducerMap<ApplicationState> = {
  ['counter']: fromCounter.reducer,
  ['authenticate']: fromAuthentication.reducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];
