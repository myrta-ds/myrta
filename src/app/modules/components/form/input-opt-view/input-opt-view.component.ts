import { Component } from '@angular/core';
import {
  NgxOtpBehavior,
  NgxOtpInputConfig
} from '../../../../../../projects/myrta-ui/src/lib/components/form/input-opt/models/input-opt.model';

@Component({
  selector: 'mrx-input-opt-view',
  templateUrl: './input-opt-view.component.html',
  styleUrls: ['./input-opt-view.component.less']
})
export class InputOptViewComponent {
  status: any = null
  value = 123
  otpConfig: NgxOtpInputConfig = {
    otpLength: 6,
    autofocus: true,
    autoblur: true,
    behavior: NgxOtpBehavior.DEFAULT,
    pattern: new RegExp(/\d/),
    classList: {
      container: '',
      inputBox: '',
      input: '1231231',
      inputFilled: 'success',
      inputDisabled: 'disabled',
      inputSuccess: 'success',
      inputError: 'error',
    }
  }

  otpChange(event: string[]) {
    console.log(event);
  }

  fill(event: string) {
    console.log(event);
  }

  changeStatus() {
    this.status = 'error'
  }
}
