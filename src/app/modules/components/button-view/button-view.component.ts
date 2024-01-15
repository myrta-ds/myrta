import { Component } from '@angular/core';

@Component({
  selector: 'app-button-view',
  templateUrl: './button-view.component.html',
  styleUrls: ['./button-view.component.less']
})
export class ButtonViewComponent {
  public icon = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 4.75C8.21979 4.75 4.75 8.21979 4.75 12.5C4.75 12.9142 4.41421 13.25 4 13.25C3.58579 13.25 3.25 12.9142 3.25 12.5C3.25 7.39137 7.39137 3.25 12.5 3.25C17.6086 3.25 21.75 7.39137 21.75 12.5C21.75 17.6086 17.6086 21.75 12.5 21.75C9.62729 21.75 7.06001 20.4396 5.3646 18.3867C5.10084 18.0673 5.14593 17.5946 5.4653 17.3308C5.78468 17.067 6.25741 17.1121 6.52117 17.4315C7.94385 19.1542 10.0936 20.25 12.5 20.25C16.7802 20.25 20.25 16.7802 20.25 12.5C20.25 8.21979 16.7802 4.75 12.5 4.75Z" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.53033 10.4697C6.82322 10.7626 6.82322 11.2374 6.53033 11.5303L4.53033 13.5303C4.23744 13.8232 3.76256 13.8232 3.46967 13.5303L1.46967 11.5303C1.17678 11.2374 1.17678 10.7626 1.46967 10.4697C1.76256 10.1768 2.23744 10.1768 2.53033 10.4697L4 11.9393L5.46967 10.4697C5.76256 10.1768 6.23744 10.1768 6.53033 10.4697Z" />
                </svg>
                `

  public logger($event: MouseEvent) {
    console.log('asdasd')

  }
}
