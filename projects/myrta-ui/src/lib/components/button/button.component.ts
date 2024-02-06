import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { LoaderColorTypes, LoaderSizesTypes } from '../loader/loader.enum';
import {
  ButtonAttrTypes,
  ButtonColorsEnum,
  ButtonColorsTypes,
  ButtonIconPositionEnum,
  ButtonIconPositionTypes,
  ButtonSizesEnum,
  ButtonSizesTypes,
  ButtonTypes,
  ButtonTypesEnum
} from './button.enum';

@Component({
  selector: 'mrx-button',
  templateUrl: 'button.component.html',
  styleUrls: ['./button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() size: ButtonSizesTypes = 'large';
  @Input() type: ButtonTypes = 'primary';
  @Input() color: ButtonColorsTypes = 'default';
  @Input() iconPosition: ButtonIconPositionTypes = 'left';
  @Input() active: boolean = false;
  @Input() disabled: boolean = false;
  @Input() isLoading: boolean = false;
  @Input() iconOnly: boolean = false;
  @Input() customClasses: string = '';
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() iconClass: string = '';
  @Input() buttonType: ButtonAttrTypes = 'button';

  @Output() mrxClick = new EventEmitter<MouseEvent>();

  public get getLabel(): null | string {
    return this.iconOnly ? null : this.label
  }

  public get isIcon(): boolean {
    return this.iconPosition !== 'none'
  }

  public get isIconLeft(): boolean {
    return this.iconPosition === 'left'
  }

  public get isIconRight(): boolean {
    return this.iconPosition === 'right'
  }

  public get getClasses(): string {
    return `${ButtonSizesEnum[this.size]} ${ButtonTypesEnum[this.type]} ${ButtonColorsEnum[this.color]} ${this.customClasses} ${ButtonIconPositionEnum[this.iconPosition]}`;
  }

  public get getLoaderColor(): LoaderColorTypes {
    if (this.disabled) {
      return 'black'
    }
    if (this.color === 'default') {
      return this.type === 'primary' ? 'white' : 'brand'
    } else if (this.type === 'primary') {
      return 'white'
    } else {
      return this.color
    }
  }

  public get getLoaderSize(): LoaderSizesTypes {
    return this.size === 'large' ? 'small' : this.size === 'medium' ? 'small' : 'extra-small'
  }

  public get getReplacedIcon(): string {
    return this.icon.replace(/"([^"]+)"/g, '\'$1\'')
  }

  public buttonClick($event: MouseEvent): void {
    if (!this.disabled) {
      this.mrxClick.emit($event)
    } else {
      $event.stopPropagation()
    }
  }
}
