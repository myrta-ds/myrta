import { Component } from '@angular/core';

@Component({
  selector: 'mrx-editor-view',
  templateUrl: './editor-view.component.html',
  styleUrls: ['./editor-view.component.less']
})
export class EditorViewComponent {
  public emptyValue = '';
  public value = '<p><img src="https://i.postimg.cc/FK0kv6Ps/ab6761610000e5ebb734e47fb260a22b529b721d.jpg" alt="" width="300px"></p>';

  public invalidMessage = 'Поле обязательно для заполнения';

  updateValue(value: any) {
    console.log(value);
    this.emptyValue = value;
  }
}
