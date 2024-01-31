import { Component, Input } from '@angular/core';
import { StateType } from '../../../../services/mrx-autosave/mrx-autosave.service';

@Component({
  selector: 'mrx-save-state-editor',
  templateUrl: './save-state-editor.component.html',
  styleUrls: ['./save-state-editor.component.less']
})
export class SaveStateEditorComponent {

  @Input() state!: StateType | null

  constructor() { }
}
