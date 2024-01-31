import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncateTextComponent } from './truncate-text.component';
import { TruncateTextDirective } from './directives/truncate-text.directive';
import { LinkModule } from '../link/link.module';

@NgModule({
  declarations: [TruncateTextComponent, TruncateTextDirective],
  imports: [CommonModule, LinkModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [TruncateTextComponent]
})
export class TruncateTextModule { }
