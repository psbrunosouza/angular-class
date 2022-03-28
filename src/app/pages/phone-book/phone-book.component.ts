import { Component, OnInit } from '@angular/core';
import {PhoneBookModel} from "../../@core/model/phone-book.model";
import {PhoneBookService} from "../../@core/api/phonebook.service";

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss'],
  providers: [PhoneBookService]
})
export class PhoneBookComponent implements OnInit {
  phoneBook: PhoneBookModel[] = [];

  constructor(private phoneBookService: PhoneBookService) { }

  ngOnInit(): void {
    this.loadPhoneBook();
  }

  loadPhoneBook(): void {
    this.phoneBookService.listPhonebook().subscribe((res) => {
      this.phoneBook = res;
    })
  }
}
