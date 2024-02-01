import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyrtaUiModule } from '../../projects/myrta-ui/src/lib/myrta-ui.module';
import { MenuAdminModule } from 'myrtex-mf-templates';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MyrtaUiModule,
    MenuAdminModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
