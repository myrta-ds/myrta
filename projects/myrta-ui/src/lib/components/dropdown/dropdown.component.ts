import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { createPopper, Instance } from '@popperjs/core';
import { Placement } from '@popperjs/core/lib/enums';

@Component({
  selector: 'mrx-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less']
})
export class DropdownComponent implements AfterViewInit {
  private _isOpen = false;
  private _showEvents: string[] = ['click'];
  private _hideEvents: string[] = ['blur']
  private _hideModalAfterClickFunc = this.hideModalAfterClick.bind(this)
  private _popperInstance?: Instance;


  @ViewChild('dropdownToggleEl') dropdownToggleEl!: ElementRef;
  @ViewChild('dropdownContent') dropdownContent!: ElementRef;
  @ContentChild('dropdownToggle') dropdownToggle!: TemplateRef<any>;
  @ContentChild('dropdownMenu') dropdownMenu!: TemplateRef<any>;

  @Input() mainPlacement: Placement = 'bottom-end'
  @Input() fallbackPlacements: Placement[] = ['bottom-start', 'top-end', 'top-start']
  @Input() closeOnClick = true
  @Input() customClasses: string = ''

  public get isOpen(): boolean {
    return this._isOpen
  }

  public set isOpen(value: boolean) {
    this._isOpen = value
  }

  public show(): void {
    document.addEventListener('click', this._hideModalAfterClickFunc);

    if (this.isOpen) {
      this.hide()
    } else {
      this.isOpen = true

      this.dropdownContent.nativeElement.setAttribute('data-show', '');

      this._popperInstance?.setOptions((options: any) => ({
        ...options,
        modifiers: [
          ...options.modifiers,
          {name: 'eventListeners', enabled: true},
        ],
      }));
    }
  }

  public hide(): void {
    document.removeEventListener('click', this._hideModalAfterClickFunc);

    this.isOpen = false
    this.dropdownContent.nativeElement.removeAttribute('data-show', '');

    this._popperInstance?.setOptions((options: any) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        {name: 'eventListeners', enabled: false},
      ],
    }));
  }

  private hideModalAfterClick(e: any) {
    const withinBoundaries = e.composedPath().includes(this.dropdownToggleEl.nativeElement);
    const withinBoundariesModal = e.composedPath().includes(this.dropdownContent.nativeElement);
    if (!withinBoundaries && !withinBoundariesModal) {
      this.hide()
    }
  }

  ngAfterViewInit(): void {
    this._popperInstance = createPopper(
      this.dropdownToggleEl.nativeElement,
      this.dropdownContent.nativeElement,
      {
        placement: this.mainPlacement,
        modifiers: [
          {
            name: 'flip',
            options: {
              fallbackPlacements: this.fallbackPlacements,
            },
          },
        ],
      }
    )

    this._showEvents.forEach((event) => {
      this.dropdownToggleEl.nativeElement.addEventListener(event, this.show.bind(this));
    });

    this._hideEvents.forEach((event) => {
      this.dropdownToggleEl.nativeElement.addEventListener(event, this.hide.bind(this));
    });
  }
}
