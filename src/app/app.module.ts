import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PhoneBookModule} from "./pages/phone-book/phone-book.module";
import {HttpClientModule} from "@angular/common/http";
import { FormPhoneItemComponent } from './pages/phone-book/form-phone-item/form-phone-item.component';
import {AppRoutingModule} from "./app-routing.module";
import { NbThemeModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
    FormPhoneItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PhoneBookModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NbThemeModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
