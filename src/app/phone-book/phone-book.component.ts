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
      phone: "21 99999-9999",
      status: "disponível",
      cpf: "550.415.008-60",
      isInternational: true,
      idade: 18,
      auxiliarPhones:["(19)996064757", "(19)996064757"]
    },
    {
      name: "Lucas",
      phone: "21 99999-9999",
      status: "disponível",
      cpf: "550.415.008-60",
      isInternational: true,
      idade: 18,
      auxiliarPhones:["(19)996064757", "(19)996064757"]
    },
    {
      name: "João",
      phone: "11 98999-9999",
      status: "bloqueado",
      cpf: "550.415.008-60",
      isInternational: false,
      idade: 18,
      auxiliarPhones:["(19)996064757", "(19)996064757"]
    },
    {
      name: "Matheus",
      phone: "19 99999-9999",
      status: "disponível",
      cpf: "550.415.008-60",
      isInternational: false,
      idade: 18,
      auxiliarPhones:["(19)996064757", "(19)996064757"]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
