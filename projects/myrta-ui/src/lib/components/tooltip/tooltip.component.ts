import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Tooltip } from './tooltip.enum';
import { TooltipTriggerTypes } from './tooltip-trigger/tooltip-trigger.enum';

@Component({
  selector: 'mrx-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.less'],
  animations: [
    trigger('openClose', [
      state( 'open', style({ height: '*', padding: '*', 'margin-bottom': '8px' })),
      state( 'closed', style({ height: 0, padding: 0, 'margin-bottom': 0 })),
      transition('open => closed', [animate('0.5s ease')]),
      transition('closed => open', [animate('0.5s ease')]),
    ]),
  ],
})
export class TooltipComponent implements OnInit {

  public TooltipEnum = Tooltip

  @Input() public tooltip: string | null = '';
  @Input() public tooltipVisible: boolean = false;
  @Input() public tooltipInitiallyVisible: boolean = false;
  @Input() public triggerType: TooltipTriggerTypes = 'attention'

  @Output() public visibilityChanged: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  public get getClasses(): string {
    return `${this.getTypeClass}`;
  }

  public get getTypeClass(): string {
    switch (this.triggerType) {
      case 'attention':
        return 'type-attention'
      case 'info':
        return 'type-info'
      default:
        return 'type-attention'
    }
  }

}
