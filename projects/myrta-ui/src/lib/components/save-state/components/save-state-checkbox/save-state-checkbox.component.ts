import { Component, Input } from '@angular/core';
import { StateType } from '../../../../services';

@Component({
  selector: 'mrx-save-state-checkbox',
  templateUrl: './save-state-checkbox.component.html',
  styleUrls: ['./save-state-checkbox.component.less']
})
export class SaveStateCheckboxComponent {

  @Input() state!: StateType | null

  constructor() { }
}
