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
      cpf: "550",
      email: "igor@teste.com",
      status: "disponível",
      isInternational: false
    },
    {
      name: "João",
      phone: "11 98999-9999",
      cpf: "550",
      email: "igor@teste.com",
      status: "bloqueado",
      isInternational: false
    },
    {
      name: "Igor",
      phone: "19 99606-4757",
      cpf: "550",
      email: "igor@teste.com",
      status: "disponível",
      isInternational: false
    }


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
