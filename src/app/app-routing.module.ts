import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhoneBookComponent} from "./pages/phone-book/phone-book.component";
import {FormPhoneItemComponent} from "./pages/phone-book/form-phone-item/form-phone-item.component";

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
    component: FormPhoneItemComponent,
  },
  {
    path: 'CreatePhoneItem/:id',
    component: FormPhoneItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
