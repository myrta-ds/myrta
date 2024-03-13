import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  autosaveStop,
  autosaveStopFor,
  MrxAutoSaveActionsEnum,
} from './actions';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { timer } from 'rxjs';
import { SaveStoreModel } from '../models/save-store.model';


@Injectable({ providedIn: 'platform' })
export class MrxAutoSaveEffects {

  constructor( private _actions$: Actions, private _store: Store) {}

  autosaveSuccess$ = createEffect(
    () => this._actions$.pipe(
      ofType(MrxAutoSaveActionsEnum.AutosaveSuccess),
      switchMap(() => timer(1500)
        .pipe(
          map(() => {
            return autosaveStop()
          })
        )
      ))
  );

  autosaveSuccessFor$ = createEffect(
    () => this._actions$.pipe(
      ofType(MrxAutoSaveActionsEnum.AutosaveSuccessFor),
      mergeMap((action: SaveStoreModel) => timer(1500)
        .pipe(
          map(() => autosaveStopFor({ id: action.id, groupId: action.groupId }))
        )
      ))
  );

  autosaveError$ = createEffect(
    () => this._actions$.pipe(
      ofType(MrxAutoSaveActionsEnum.AutosaveError),
      switchMap(() => timer(1500)
        .pipe(
          map(() => autosaveStop())
        )
      )
    )
  );

  autosaveErrorFor$ = createEffect(
    () => this._actions$.pipe(
      ofType(MrxAutoSaveActionsEnum.AutosaveErrorFor),
      mergeMap((action: SaveStoreModel) => timer(1500)
        .pipe(
          map(() => autosaveStopFor({ id: action.id, groupId: action.groupId }))
        )
      ))
  );
}
