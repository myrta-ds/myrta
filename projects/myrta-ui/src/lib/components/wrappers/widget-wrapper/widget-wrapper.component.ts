import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'mrx-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.less'],
  animations: [
    trigger('expandedPanel', [
      state('initial', style({height: 0, opacity: 0})),
      state('expanded', style({height: '*', opacity: 1})),
      transition('initial => expanded', animate('0.2s', keyframes([
        style({height: '*', offset: 0.7}),
        style({opacity: 1, offset: 1})
      ]))),
      transition('expanded => initial', animate('0.2s', keyframes([
        style({opacity: 0, offset: 0.4}),
        style({height: 0, offset: 1})
      ])))
    ]),
  ],
})
export class WidgetWrapperComponent implements OnInit {
  private _animateState: 'initial' | 'expanded' = 'initial'

  @Input() title = ''
  @Input() titleInfo = ''
  @Input() iconClass = ''
  @Input() isOpen = true

  @Output() toggleWidgetContent: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ContentChild('templateHeadTitle') templateHeadTitle!: TemplateRef<HTMLElement>;
  @ContentChild('templateHeadLeft') templateHeadLeft!: TemplateRef<HTMLElement>;
  @ContentChild('templateHeadRight') templateHeadRight!: TemplateRef<HTMLElement>;
  @ContentChild('templateContent') templateContent!: TemplateRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
    this._animateState = this.isOpen ? 'expanded' : 'initial'
  }

  public get isOpenState(): string {
    return this._animateState
  }

  public changeVisibleContent(): void {
    this.isOpen = !this.isOpen
    this._animateState = this._animateState === 'initial' ? 'expanded' : 'initial'
    this.toggleWidgetContent.emit(this.isOpen)
  }
}
