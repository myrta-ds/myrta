import { Field, initialMrxAutoSaveState, MrxAutoSaveState } from './state';
import { Action, createReducer, on } from '@ngrx/store';
import * as MrxAutoSaveActions from './actions';
import { cloneDeep } from 'lodash-es';

const reducerCreator = createReducer(
  initialMrxAutoSaveState,
  on(MrxAutoSaveActions.autosaveAddId, (state, { id, groupId = null }) => {
    const isFind = state.fields.some((field) => field.id === id);
    if (!isFind) {
      return {
        ...state,
        fields: [...state.fields, { id: id, state: 'stopped', groupId: groupId }]
      };
    }
    else {
      return { ...state };
    }
  }),
  on(MrxAutoSaveActions.autosaveStart, (state) => {
    return { ...state, fields: [...state.fields].map(f => ({ ...f, state: 'saving' })) };
  }),
  on(MrxAutoSaveActions.autosaveStartFor, (state, { id, groupId = null }) => {
    const fields = cloneDeep(state.fields);
    return {
      ...state, fields: fields.map(f => {
        if (groupId && f.groupId === groupId) {
          f.state = 'saving';
        }
        else if (f.id === id) {
          f.state = 'saving';
        }
        return f;
      })
    };
  }),
  on(MrxAutoSaveActions.autosaveSuccess, (state) => {
    return { ...state, fields: [...state.fields].map(f => ({ ...f, state: 'saved' })) };
  }),
  on(MrxAutoSaveActions.autosaveSuccessFor, (state, { id, groupId = null }) => {
    const fields = cloneDeep(state.fields);
    return {
      ...state, fields: fields.map(f => {
        if (groupId && f.groupId === groupId) {
          f.state = 'saved';
        }
        else if (f.id === id) {
          f.state = 'saved';
        }
        return f;
      })
    };
  }),
  on(MrxAutoSaveActions.autosaveError, (state) => {
    return { ...state, fields: [...state.fields].map(f => ({ ...f, state: 'error' })) };
  }),
  on(MrxAutoSaveActions.autosaveErrorFor, (state, { id, groupId = null }) => {
    const fields = cloneDeep(state.fields);
    return {
      ...state, fields: fields.map(f => {
        if (groupId && f.groupId === groupId) {
          f.state = 'error';
        }
        else if (f.id === id) {
          f.state = 'error';
        }
        return f;
      })
    };
  }),
  on(MrxAutoSaveActions.autosaveStop, (state) => {
    return { ...state, fields: [] };
  }),
  on(MrxAutoSaveActions.autosaveStopFor, (state, { id, groupId = null }) => {
    return {
      ...state,
      fields: state.fields.filter((f) => {
        if (groupId) {
          return f.groupId !== groupId;
        }
        else {
          return f.id !== id;
        }
      })
    };
  }),
);

export function mrxAutoSaveStateReducer(state: MrxAutoSaveState | undefined, action: Action) {
  return reducerCreator(state, action);
}
