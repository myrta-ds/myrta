import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { autosaveAddId, error, MrxAutoSaveActionsEnum, saved, stop } from './actions';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'platform' })
export class MrxAutoSaveEffects {

  private _timer!: ReturnType<typeof setTimeout>;
  private _timer2!: ReturnType<typeof setTimeout>;

  constructor(
    private _actions$: Actions,
    private _store: Store
  ) {
  }

  autosaveAddId$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(MrxAutoSaveActionsEnum.AutosaveAddId),
      map(() => {
        clearTimeout(this._timer)
        clearTimeout(this._timer2)
      })
    );
  }, { dispatch: false });

  autosaveSuccess$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(MrxAutoSaveActionsEnum.AutosaveSuccess),
      map(() => {
        this._store.dispatch(saved());
        clearTimeout(this._timer)
        clearTimeout(this._timer2)

        this._timer = setTimeout(() => {
          this._store.dispatch(stop());
        }, 1500);
      })
    );
  }, { dispatch: false });

  autosaveError$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(MrxAutoSaveActionsEnum.AutosaveError),
      map(() => {
        this._store.dispatch(error());

        clearTimeout(this._timer)
        clearTimeout(this._timer2)

        this._timer2 = setTimeout(() => {
          this._store.dispatch(stop());
        }, 1500);
      })
    );
  }, { dispatch: false });
}
