import {
  ChangeDetectionStrategy,
  Component,
  ContentChild, ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef
} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TooltipTextPositionTypes, TooltipTriggerTypes } from '../tooltip/tooltip-trigger/tooltip-trigger.enum';
import { TooltipService } from '../tooltip/services/tooltip.service';
import { LinkTypes } from '../link/link.enum';
import { SwitchValueTypes } from '../form/switch/switch.enum';

@Component({
  selector: 'mrx-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.less'],
  animations: [
    trigger('openClose', [
      state('open', style({ height: '*', padding: '*', 'margin-bottom': '8px' })),
      state('closed', style({ height: 0, padding: 0, 'margin-bottom': 0 })),
      transition('open => closed', [animate('0.5s ease')]),
      transition('closed => open', [animate('0.5s ease')]),
    ]),
  ],
  providers: [TooltipService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent implements OnInit {
  private _tooltip = ''
  private _tooltipInitialVisible = false
  private _isSaveToStorage = false

  @Input() public requiredHidden = false;
  @Input() public required = false;
  @Input() public boldLabel = true;
  @Input() public disabled = false;
  @Input() public placeholder = '';
  @Input() public label = '';
  @Input() public customClasses = '';
  @Input() public triggerTextPosition: TooltipTextPositionTypes = 'default';
  @Input() public isPublicInfo = false;
  @Input() public publicInfoTooltip = '';

  // CHECKBOX
  @Input() public isSwitch = false;
  @Input() public switchLabel = '';
  @Input() public switchValue = false;

  // COUNTER
  @Input() public counter: number | undefined = 0;

  // LINK
  @Input() linkText = '';
  @Input() linkPrevent = true;
  @Input() linkType: LinkTypes = 'pseudo';
  @Input() linkMonochrome = true;
  @Input() href = '#';

  @Input() triggerType: TooltipTriggerTypes = 'attention';

  @ContentChild('customIcons') customIcons!: TemplateRef<ElementRef>;

  @Output() public changeCheckboxValue: EventEmitter<SwitchValueTypes> =
    new EventEmitter<SwitchValueTypes>();

  @Input()
  set tooltip(tooltip: string) {
    this._tooltip = tooltip;
    this.tooltipService.setTooltip = tooltip
  }

  @Input()
  set tooltipInitialVisible(value: boolean) {
    this._tooltipInitialVisible = value;
    this.tooltipService.toggleTooltipVisibleFromCode(value)
  }

  @Input()
  set isSaveToStorage(value: boolean) {
    this._isSaveToStorage = value;
    this.tooltipService.setSaveToStorage = value
  }

  @Output() clickedLink: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor(public tooltipService: TooltipService) { }

  public get getClasses(): string {
    return `${this.customClasses}`;
  }

  ngOnInit() {
    this.tooltipService.initTooltip(this._tooltip, this._tooltipInitialVisible);
  }

  public onClickToLink(event: MouseEvent): void {
    this.clickedLink.emit(event)
  }
}
