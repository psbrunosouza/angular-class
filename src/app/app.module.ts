import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import {FormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";

@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        NgxMaskModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
