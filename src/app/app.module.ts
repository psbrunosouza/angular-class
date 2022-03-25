import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {PhoneBookModule} from "./pages/phone-book/phone-book.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PhoneBookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
