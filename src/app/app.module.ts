import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxMaskModule} from "ngx-mask";
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {PhoneBookModule} from "./phone-book/phone-book.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PhoneBookModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
