import { Component, Input } from '@angular/core';
import { LoaderColorEnum, LoaderColorTypes, LoaderSizesEnum, LoaderSizesTypes } from './loader.enum';

@Component({
  selector: 'mrx-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less']
})
export class LoaderComponent {
  @Input() size: LoaderSizesTypes = 'small'
  @Input() color: LoaderColorTypes = 'black'
  @Input() customClasses = '';

  public get getClasses(): string {
    return `${LoaderSizesEnum[this.size]} ${LoaderColorEnum[this.color]} ${this.customClasses}`;
  }
}
