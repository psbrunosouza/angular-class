import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PhoneBookModel} from "../../../@core/model/phone-book.model";
import {PhoneBookService} from "../../../@core/api/phonebook.service";


@Component({
  selector: 'app-phone-item',
  templateUrl: './phone-item.component.html',
  styleUrls: ['./phone-item.component.scss'],
  providers: [PhoneBookService]
})
export class PhoneItemComponent implements OnInit {

  @Output() phoneItenEvent = new EventEmitter();

  @Input() phoneItem: PhoneBookModel;

  constructor(private phoneBookService: PhoneBookService) { }

  ngOnInit(): void {
  }

  //deleta por a funçao do service e emite um evento para o PhoneBook
  delete(id: string): void{
    this.phoneBookService.deletePhone(id).subscribe(() => {
      this.phoneItenEvent.emit(null);
    })
  }
}
