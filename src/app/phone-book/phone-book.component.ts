import { Component, OnInit } from '@angular/core';
import {PhoneBookModel} from "./phone-book.model";

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})
export class PhoneBookComponent implements OnInit {

  phoneBook: PhoneBookModel[] = [
    {
      name: "José",
      phone: "19 99999-9999",
      status: "disponível"
    },
    {
      name: "João",
      phone: "11 98999-9999",
      status: "bloqueado"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
