import { Component, Input } from '@angular/core';
import { StateType } from '../../../../services/mrx-autosave/mrx-autosave.service';

@Component({
  selector: 'mrx-save-state-input',
  templateUrl: './save-state-input.component.html',
  styleUrls: ['./save-state-input.component.less']
})
export class SaveStateInputComponent {

  @Input() state!: StateType | null

  constructor() { }
}
