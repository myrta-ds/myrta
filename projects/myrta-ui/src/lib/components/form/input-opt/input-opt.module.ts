import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputOptComponent } from './components/input-opt/input-opt.component';
import { OptPatternDirective } from './directives/opt-pattern.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputOptService } from './services/input-opt.service';
import { ErrorMessageModule } from '../../error-message/error-message.module';



@NgModule({
  declarations: [
    OptPatternDirective,
    InputOptComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ErrorMessageModule
  ],
  exports: [InputOptComponent],
  providers: [InputOptService],
})
export class InputOptModule { }
