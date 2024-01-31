import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ContentWrapperType, ContentWrapperTypeEnum } from './content-wrapper.enum';

@Component({
  selector: 'mrx-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentWrapperComponent {
  @Input() type: ContentWrapperType = 'default';
  @Input() customClasses = ''
  @Input() maxWidth: string | undefined;

  public get getClasses(): string {
    return `${ContentWrapperTypeEnum[this.type]} ${this.customClasses}`;
  }
}
