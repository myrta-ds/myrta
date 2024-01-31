import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveStateComponent } from './save-state.component';
import { SaveStateInputComponent } from './components/save-state-input/save-state-input.component';
import { SaveStateCheckboxComponent } from './components/save-state-checkbox/save-state-checkbox.component';
import {
  SaveStateCheckboxGroupComponent
} from './components/save-state-checkbox-group/save-state-checkbox-group.component';
import { SaveStateSwitchComponent } from './components/save-state-switch/save-state-switch.component';
import { SaveStateEditorComponent } from './components/save-state-editor/save-state-editor.component';



@NgModule({
  declarations: [
    SaveStateComponent,
    SaveStateInputComponent,
    SaveStateCheckboxComponent,
    SaveStateCheckboxGroupComponent,
    SaveStateSwitchComponent,
    SaveStateEditorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SaveStateComponent]
})
export class SaveStateModule { }
