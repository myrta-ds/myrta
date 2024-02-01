import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxFileDropModule } from 'ngx-file-drop';
import { InputFileComponent } from './input-file.component';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadService } from '../../../services/file-upload/file-upload.service';
import { ErrorMessageModule } from '../../error-message/error-message.module';
import { CdkTooltipModule } from '../../cdk-tooltip/cdk-tooltip.module';

@NgModule({
  declarations: [InputFileComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, NgxFileDropModule, ErrorMessageModule, CdkTooltipModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [InputFileComponent],
  providers: [FileUploadService]
})
export class InputFileModule {}
