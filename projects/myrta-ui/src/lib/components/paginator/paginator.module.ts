import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [PaginatorComponent]
})
export class PaginatorModule {}
