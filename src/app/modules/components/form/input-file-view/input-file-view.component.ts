import { Component, OnInit } from '@angular/core';
import { InputFileModel } from 'myrta-ui';

@Component({
  selector: 'mrx-input-file-view',
  templateUrl: './input-file-view.component.html',
  styleUrls: ['./input-file-view.component.less']
})
export class InputFileViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  update(event: InputFileModel[]) {
    console.log(event);
  }
}
