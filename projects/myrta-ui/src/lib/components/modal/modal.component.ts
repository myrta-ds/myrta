import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef
} from '@angular/core';
import {
  ModalAlignButtonsEnum,
  ModalAlignButtonsTypes,
  ModalColorEnum,
  ModalColorTypes,
  ModalSizesEnum,
  ModalSizesTypes
} from './modal.emun';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ButtonColorsTypes, ButtonIconPositionTypes } from '../button/button.enum';

@Component({
  selector: 'mrx-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('animateExpand', [
      state('open', style({
        height: '100%',
        width: '100%',
        maxWidth: 'none',
        minHeight: '100vh',
        minWidth: '100vw',
        marginTop: '0',
        marginBottom: '0'
      })),
      state('closed', style({ height: '*', width: '*' })),
      transition('open => closed', [animate('0.5s ease')]),
      transition('closed => open', [animate('0.5s ease')]),
    ]),
  ],
})
export class ModalComponent {
  public isEmbed = false

  @Input() title?: string | null = ''
  @Input() message?: string | null = ''
  @Input() okText = 'Отменить'

  @Input() closeText = 'Подтвердить'
  @Input() size: ModalSizesTypes = 'small'
  @Input() color: ModalColorTypes = 'default'
  @Input() customClasses = ''
  @Input() expandable = false
  @Input() isClose = true
  @Input() isBack = false
  @Input() backText = 'Назад'
  @Input() enableFooter = true
  @Input() alignButtons: ModalAlignButtonsTypes = 'center'
  @Input() isLoading = false;
  @Input() iconPosition: ButtonIconPositionTypes = 'left';

  @ContentChild('footerContent') footerContent!: TemplateRef<HTMLElement>;

  @Output() ok: EventEmitter<null> = new EventEmitter<null>();
  @Output() close: EventEmitter<null> = new EventEmitter<null>();
  @Output() back: EventEmitter<null> = new EventEmitter<null>();

  public get getColorClass() {
    return this.color ? ModalColorEnum[this.color] : ''
  }

  public get getClasses(): string {
    return `${ ModalSizesEnum[this.size] } ${ this.getColorClass } ${ this.customClasses }`;
  }

  public get getButtonColor(): ButtonColorsTypes {
    switch (this.color) {
      case 'negative':
        return 'negative'
      case 'attention':
        return 'attention'
      default:
        return 'default'
    }
  }

  public get alignButtonsClass(): string {
    return ModalAlignButtonsEnum[this.alignButtons]
  }

  public onOk(): void {
    this.ok.emit()
  }

  public onClose(): void {
    this.close.emit()
  }

  public onBack() {
    this.back.emit()
  }

  public onExpanding(): void {
    this.isEmbed = !this.isEmbed
  }
}
