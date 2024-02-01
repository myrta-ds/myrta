import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { PaginatorModule } from '../paginator/paginator.module';
import { ColumnComponent } from './components/column/column.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { LoaderModule } from '../loader/loader.module';
import { InputSelectModule } from '../form/input-select/input-select.module';

@NgModule({
  declarations: [
    TableComponent,
    ColumnComponent
  ],
  imports: [
    CommonModule,
    PaginatorModule,
    InputSelectModule,
    NgSelectModule,
    FormsModule,
    LoaderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    TableComponent,
    ColumnComponent
  ]
})
export class TableModule {}
