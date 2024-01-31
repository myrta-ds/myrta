import { Directive, HostListener } from '@angular/core';
import { DropdownComponent } from '../dropdown.component';

@Directive({
  selector: '[mrxHideAfterClick]'
})
export class HideAfterClickDirective {

  constructor(public dropdown: DropdownComponent) { }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    this.dropdown.hide()
  }
}
