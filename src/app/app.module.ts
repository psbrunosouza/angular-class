import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {PhoneBookModule} from "./pages/phone-book/phone-book.module";
import {HttpClientModule} from "@angular/common/http";
import { CreatePhoneItemComponent } from './pages/phone-book/page-inplements/create-phone-item/create-phone-item.component';
import { EditPhoneItemComponent } from './pages/phone-book/page-inplements/edit-phone-item/edit-phone-item.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    CreatePhoneItemComponent,
    EditPhoneItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PhoneBookModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
