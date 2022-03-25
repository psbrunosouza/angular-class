import { Component, OnInit } from '@angular/core';
import {PhoneBookModel} from "./phone-book.model";

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})
export class PhoneBookComponent implements OnInit {

  phoneBook: PhoneBookModel[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
