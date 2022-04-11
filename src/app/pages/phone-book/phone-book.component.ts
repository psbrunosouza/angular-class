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
  //declaração do phoneBook
  phoneBook: PhoneBookModel[] = [];

  //"injeção" do phoneBookService
  constructor(private phoneBookService: PhoneBookService) { }

  //faz com que logo no início da página ele carregue a punça~p
  ngOnInit(): void {
    this.loadPhoneBook();
  }

  //carreaga os cards
  loadPhoneBook(): void {
    this.phoneBookService.listPhonebook().subscribe((res) => {
      this.phoneBook = res;
    })
  }
}
