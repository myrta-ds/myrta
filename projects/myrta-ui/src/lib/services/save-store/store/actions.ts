import { createAction, props } from '@ngrx/store';
import { SaveStoreModel } from '../models/save-store.model';

export enum MrxAutoSaveActionsEnum {
  AutosaveAddId = '[Mrx Auto Save] Autosave Add Id',
  AutosaveStart = '[Mrx Auto Save] Autosave Start',
  AutosaveStartFor = '[Mrx Auto Save] Autosave Start For',
  AutosaveStop = '[Mrx Auto Save] Autosave Stop',
  AutosaveStopFor = '[Mrx Auto Save] Autosave Stop For',
  AutosaveSuccess = '[Mrx Auto Save] Autosave Success',
  AutosaveSuccessFor = '[Mrx Auto Save] Autosave Success For',
  AutosaveError = '[Mrx Auto Save] Autosave Error',
  AutosaveErrorFor = '[Mrx Auto Save] Autosave Error For',
}

export const autosaveAddId = createAction(
  MrxAutoSaveActionsEnum.AutosaveAddId,
  props<SaveStoreModel>()
);

export const autosaveStart = createAction(
  MrxAutoSaveActionsEnum.AutosaveStart
);

export const autosaveStartFor = createAction(
  MrxAutoSaveActionsEnum.AutosaveStartFor,
  props<SaveStoreModel>()
);

export const autosaveStop = createAction(
  MrxAutoSaveActionsEnum.AutosaveStop
);

export const autosaveStopFor = createAction(
  MrxAutoSaveActionsEnum.AutosaveStopFor,
  props<SaveStoreModel>()
);

export const autosaveSuccess = createAction(
  MrxAutoSaveActionsEnum.AutosaveSuccess
);

export const autosaveSuccessFor = createAction(
  MrxAutoSaveActionsEnum.AutosaveSuccessFor,
  props<SaveStoreModel>()
);

export const autosaveError = createAction(
  MrxAutoSaveActionsEnum.AutosaveError
);

export const autosaveErrorFor = createAction(
  MrxAutoSaveActionsEnum.AutosaveErrorFor,
  props<SaveStoreModel>()
);

