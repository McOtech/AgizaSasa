import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JQ_TOKEN } from './services/jquery.service';
import { Toastr, TOASTR_TOKEN } from './services/toastr.service';

const jQuery = window['$'];
const toastr: Toastr = window['toastr'];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
