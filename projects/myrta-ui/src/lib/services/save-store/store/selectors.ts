import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SAVE_STATE_MODULE_NAME } from '../constants/constants';
import { MrxAutoSaveState } from './state';

export const selectMrxAutoSaveState = createFeatureSelector<MrxAutoSaveState>(SAVE_STATE_MODULE_NAME);

export const selectFields = createSelector(
  selectMrxAutoSaveState,
  (state: MrxAutoSaveState) => state.fields
);
