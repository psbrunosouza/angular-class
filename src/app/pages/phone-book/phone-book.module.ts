import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneBookComponent } from './phone-book.component';
import { PhoneItemComponent } from './phone-item/phone-item.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    PhoneBookComponent,
    PhoneItemComponent,
  ],
  exports: [
    PhoneBookComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class PhoneBookModule { }
