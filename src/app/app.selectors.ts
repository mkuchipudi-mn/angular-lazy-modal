import { createFeatureSelector } from '@ngrx/store';
import { RouterReducerState, getSelectors } from '@ngrx/router-store';

import { State } from './app.state';

export const selectRouter = createFeatureSelector<
  State,
  RouterReducerState<any>
>('router');
 
export const {
  selectRouteData,
  selectUrl
} = getSelectors(selectRouter);