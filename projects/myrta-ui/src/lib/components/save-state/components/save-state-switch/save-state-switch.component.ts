import { Component, Input } from '@angular/core';
import { StateType } from '../../../../services/mrx-autosave/mrx-autosave.service';

@Component({
  selector: 'mrx-save-state-switch',
  templateUrl: './save-state-switch.component.html',
  styleUrls: ['./save-state-switch.component.less']
})
export class SaveStateSwitchComponent {

  @Input() state!: StateType | null

  constructor() { }
}
