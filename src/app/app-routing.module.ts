import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhoneBookComponent} from "./pages/phone-book/phone-book.component";
import {
  CreatePhoneItemComponent
} from "./pages/phone-book/page-inplements/create-phone-item/create-phone-item.component";
import {EditPhoneItemComponent} from "./pages/phone-book/page-inplements/edit-phone-item/edit-phone-item.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'phonebook',
    pathMatch: 'full'
  },

  {
    path: 'phonebook',
    component: PhoneBookComponent,
  },
  {
    path: 'CreatePhoneItem',
    component: CreatePhoneItemComponent,
  },
  {
    path: 'EditPhoneItem://id',
    component: EditPhoneItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
