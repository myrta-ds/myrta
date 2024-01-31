import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mrx-truncate-text-view',
  templateUrl: './truncate-text-view.component.html',
  styleUrls: ['./truncate-text-view.component.less']
})
export class TruncateTextViewComponent implements OnInit {
  public text = `

  `

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.text = `
              <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in
        </div>
      `
    }, 2000)
  }
}
