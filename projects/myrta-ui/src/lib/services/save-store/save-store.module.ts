import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { SAVE_STATE_MODULE_NAME } from './constants/constants';
import { mrxAutoSaveStateReducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { MrxAutoSaveEffects } from './store/effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(SAVE_STATE_MODULE_NAME, mrxAutoSaveStateReducer),
    EffectsModule.forFeature([MrxAutoSaveEffects])
  ]
})
export class SaveStoreModule { }
