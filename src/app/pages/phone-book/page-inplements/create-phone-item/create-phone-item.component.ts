import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PhoneBookModel} from "../../../../@core/model/phone-book.model";
import{PhoneBookService} from "../../../../@core/api/phonebook.service";

@Component({
  selector: 'app-create-phone-item',
  templateUrl: './create-phone-item.component.html',
  styleUrls: ['./create-phone-item.component.scss'],
  providers:[PhoneBookService]
})
export class CreatePhoneItemComponent implements OnInit {

  phoneItem: PhoneBookModel;

  @Input() phoneBook: PhoneBookModel[] = [];

  @Output() selectPhone$: EventEmitter<number> = new EventEmitter<number>();


  constructor(private phoneBookService: PhoneBookService) {
  }

  ngOnInit(): void {
    this.phoneItem = new PhoneBookModel();
  }

  create(){
    this.phoneBookService.addPhone(this.phoneItem).subscribe()
  }
}
