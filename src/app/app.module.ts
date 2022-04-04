import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PhoneBookModule} from "./pages/phone-book/phone-book.module";
import {HttpClientModule} from "@angular/common/http";
import { CreatePhoneItemComponent } from './pages/phone-book/page-inplements/create-phone-item/create-phone-item.component';
import { EditPhoneItemComponent } from './pages/phone-book/page-inplements/edit-phone-item/edit-phone-item.component';
import {AppRoutingModule} from "./app-routing.module";
import { NbThemeModule } from '@nebular/theme';

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
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NbThemeModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
