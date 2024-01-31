import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputEditorComponent } from './input-editor.component';
import { EditorToolbarComponent } from './components/editor-toolbar/editor-toolbar.component';
import { EditorToolbarButtonComponent } from './components/editor-toolbar-button/editor-toolbar-button.component';
import { EditorToolbarSelectComponent } from './components/editor-toolbar-select/editor-toolbar-select.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputEditorComponent,
    EditorToolbarComponent,
    EditorToolbarButtonComponent,
    EditorToolbarSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    // InputEditorComponent
  ]
})
export class InputEditorModule { }
