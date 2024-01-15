import { NgModule } from '@angular/core';
import { ButtonModule } from './components/button/button.module';
import { LoaderModule } from './components/loader/loader.module';
import { AlertModule } from './components/alert/alert.module';
import { BadgesModule } from './components/badges/badges.module';
import { BreadcrumbsModule } from './components/breadcrumbs/breadcrumbs.module';



@NgModule({
  imports: [
    ButtonModule,
    LoaderModule,
    AlertModule,
    BadgesModule,
    BreadcrumbsModule
  ],
  exports: [
    ButtonModule,
    LoaderModule,
    AlertModule,
    BadgesModule,
    BreadcrumbsModule
  ]
})
export class MyrtaUiModule { }
