import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { AnimateCheckboxGroupState, CheckboxGroupItem, CheckboxIndeterminateState } from '../../models/checkbox-group.model';

@Component({
  selector: 'mrx-checkbox-group-item',
  templateUrl: './checkbox-group-item.component.html',
  styleUrls: ['./checkbox-group-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openList', [
      state('open', style({ height: '*', opacity: '1', visibility: 'visible', marginTop: '12px' })),
      state('close', style({ height: '0', opacity: '0', visibility: 'hidden', marginTop: '0', overflow: 'hidden' })),
      transition('open => close', [group([
          animate('100ms ease-in-out', style({ opacity: '0' })),
          animate('200ms ease-in-out', style({ height: '0px', marginTop: '0', overflow: 'hidden' })),
          animate('400ms ease-in-out', style({ visibility: 'hidden' }))
        ]
      )]),
      transition('close => open', [group([
          animate('1ms ease-in-out', style({ visibility: 'visible' })),
          animate('200ms ease-in-out', style({ height: '*', marginTop: '12px', overflow: 'hidden' })),
          animate('400ms ease-in-out', style({ opacity: '1' }))
        ],
      )])
    ])
  ]
})
export class CheckboxGroupItemComponent implements OnChanges {
  public animationState: AnimateCheckboxGroupState = 'close'

  @Input() item!: CheckboxGroupItem
  @Input() displaced = false
  @Input() level = 0
  @Input() animationTrigger: boolean | null = null
  @Input() isLast!: boolean

  @Output() public animationEnd: EventEmitter<null> = new EventEmitter<null>();
  @Output() public checkboxChanged: EventEmitter<{ value: CheckboxIndeterminateState, item: CheckboxGroupItem }> =
    new EventEmitter<{ value: CheckboxIndeterminateState, item: CheckboxGroupItem }>();

  constructor(private detector: ChangeDetectorRef) {
  }

  public get isIndeterminate(): boolean {
    return this.item.value === null
  }

  public trackByFn(index: number, item: CheckboxGroupItem) {
    return item.id;
  }

  public toggleList(item: CheckboxGroupItem): void {
    this.animationState = this.animationState === 'close' ? 'open' : 'close';
  }

  public checkboxChangeModel(value: CheckboxIndeterminateState, item: CheckboxGroupItem): void {
    if (this.isIndeterminate) {
      this.checkboxChanged.emit({ value: false, item })
    } else {
      this.checkboxChanged.emit({ value: value, item })
    }

    this.detector.detectChanges()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item'] && (changes['item'].currentValue.value === null)) {
      this.animationState = 'open'
    } else {
      if (this.animationTrigger) {
        this.animationState = 'open'
      } else {
        this.animationState = 'close'
      }
    }

    this.detector.detectChanges()
  }

  public onAnimationEvent(): void {
    this.animationEnd.emit()
  }
}
