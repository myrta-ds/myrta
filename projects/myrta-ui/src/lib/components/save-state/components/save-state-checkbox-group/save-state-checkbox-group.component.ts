import { Component, Input } from '@angular/core';
import { StateType } from '../../../../services';

@Component({
  selector: 'mrx-save-state-checkbox-group',
  templateUrl: './save-state-checkbox-group.component.html',
  styleUrls: ['./save-state-checkbox-group.component.less']
})
export class SaveStateCheckboxGroupComponent {

  @Input() state!: StateType | null

  constructor() { }
}
