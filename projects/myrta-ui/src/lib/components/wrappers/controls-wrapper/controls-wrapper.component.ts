import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Input, TemplateRef } from '@angular/core';
import { ControlsVisibilityEnum, ControlsVisibilityTypes } from './controls-wrapper.enum';

@Component({
  selector: 'mrx-controls-wrapper',
  templateUrl: './controls-wrapper.component.html',
  styleUrls: ['./controls-wrapper.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlsWrapperComponent {
  @Input() visibility: ControlsVisibilityTypes = 'auto'

  @ContentChild('controls') controls!: TemplateRef<ElementRef>;

  public get getClasses(): string {
    return `${ControlsVisibilityEnum[this.visibility]}`;
  }
}
