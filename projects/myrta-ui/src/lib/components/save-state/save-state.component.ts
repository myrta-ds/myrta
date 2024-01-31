import { Component, Input, OnInit } from '@angular/core';
import { SaveStateComponentType } from './save-state.enum';
import { Field, StateType } from '../../services/mrx-autosave/mrx-autosave.service';

@Component({
  selector: 'mrx-save-state',
  templateUrl: './save-state.component.html',
  styleUrls: ['./save-state.component.less']
})
export class SaveStateComponent {

  @Input() type: SaveStateComponentType = 'input'
  @Input() fields: Field[] = []
  @Input() id!: string

  constructor() {
  }

  public get getState(): StateType | null {
    const savingId = this.fields.findIndex((field) => field.id === this.id)

    if (savingId !== undefined && savingId !== null && savingId !== -1) {
      return this.fields[savingId].state
    } else {
      return null
    }
  }

  public get isSaving(): boolean {
    return this.fields.some((field) => field.id === this.id)
  }
}
