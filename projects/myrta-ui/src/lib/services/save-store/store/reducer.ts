import { Field, initialMrxAutoSaveState, MrxAutoSaveState } from './state';
import { Action, createReducer, on } from '@ngrx/store';
import * as MrxAutoSaveActions from './actions';

const reducerCreator = createReducer(
  initialMrxAutoSaveState,
  on(MrxAutoSaveActions.autosaveAddId, (state, { id }) => {
    const isFind = state.fields.some((field: Field) => field.id === id);

    if (!isFind) {
      return {
        ...state,
        fields: [...state.fields, { id: id, state: 'stopped' }].map(f => ({ ...f, state: 'stopped' }))
      };
    } else {
      return { ...state };
    }
  }),
  on(MrxAutoSaveActions.autosaveStart, (state) => {
    return { ...state, fields: [...state.fields].map(f => ({ ...f, state: 'saving' })) };
  }),
  on(MrxAutoSaveActions.autosaveStop, (state) => {
    return { ...state, fields: [] };
  }),
  on(MrxAutoSaveActions.saved, (state) => {
    return { ...state, fields: [...state.fields].map(f => ({ ...f, state: 'saved' })) };
  }),
  on(MrxAutoSaveActions.stop, (state) => {
    return { ...state, fields: [] };
  }),
  on(MrxAutoSaveActions.error, (state) => {
    return { ...state, fields: [...state.fields].map(f => ({ ...f, state: 'error' })) };
  }),
);

export function mrxAutoSaveStateReducer(state: MrxAutoSaveState | undefined, action: Action) {
  return reducerCreator(state, action);
}
