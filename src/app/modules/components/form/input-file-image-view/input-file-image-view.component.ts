import { Component } from '@angular/core';
import { InputFileModel } from '../../../../../../projects/myrta-ui/src/public-api';

@Component({
  selector: 'mrx-input-file-image-view',
  templateUrl: './input-file-image-view.component.html',
  styleUrls: ['./input-file-image-view.component.less']
})
export class InputFileImageViewComponent {
  filesChanged(event: InputFileModel[]) {
    console.log(1)
    console.log(event)
  }
}
