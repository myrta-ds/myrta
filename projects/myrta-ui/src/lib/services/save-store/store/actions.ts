import { createAction, props } from '@ngrx/store';

export enum MrxAutoSaveActionsEnum {
  AutosaveAddId = '[Mrx Auto Save] Autosave Add Id',
  AutosaveStart = '[Mrx Auto Save] Autosave Start',
  AutosaveStop = '[Mrx Auto Save] Autosave Stop',
  AutosaveSuccess = '[Mrx Auto Save] Autosave Success',
  AutosaveError = '[Mrx Auto Save] Autosave Error',
  Start = '[Mrx Auto Save] Start',
  Stop = '[Mrx Auto Save] Stop',
  Saved = '[Mrx Auto Save] Saved',
  Error = '[Mrx Auto Save] Error',
}

export const autosaveAddId = createAction(
  MrxAutoSaveActionsEnum.AutosaveAddId,
  props<{id: string}>()
);

export const autosaveStart = createAction(
  MrxAutoSaveActionsEnum.AutosaveStart
);

export const autosaveStop = createAction(
  MrxAutoSaveActionsEnum.AutosaveStop
);

export const autosaveSuccess = createAction(
  MrxAutoSaveActionsEnum.AutosaveSuccess
);

export const autosaveError = createAction(
  MrxAutoSaveActionsEnum.AutosaveError
);

export const start = createAction(
  MrxAutoSaveActionsEnum.Start
);

export const stop = createAction(
  MrxAutoSaveActionsEnum.Stop
);

export const saved = createAction(
  MrxAutoSaveActionsEnum.Saved
);

export const error = createAction(
  MrxAutoSaveActionsEnum.Error
);

