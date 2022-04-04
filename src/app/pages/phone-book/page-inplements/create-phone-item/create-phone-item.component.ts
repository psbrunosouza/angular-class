import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {PhoneBookModel} from "../../../../@core/model/phone-book.model";
import{PhoneBookService} from "../../../../@core/api/phonebook.service";

@Component({
  selector: 'app-create-phone-item',
  templateUrl: './create-phone-item.component.html',
  styleUrls: ['./create-phone-item.component.scss']
})
export class CreatePhoneItemComponent implements OnInit {

  @Input() phoneItem: PhoneBookModel;

  @Input() phoneBook: PhoneBookModel[] = [];

  @Output() selectPhone$: EventEmitter<number> = new EventEmitter<number>();


  constructor(private phoneBookService: PhoneBookService) {
  }
  id = new FormControl();
  name = new FormControl('');
  phone = new FormControl('');
  status = new FormControl('');
  cpf = new FormControl('');
  isInternational = new FormControl(false);
  idade = new FormControl();
  auxiliarPhones = new FormControl('');
  ngOnInit(): void {
  }

  create(){
    this.phoneBookService.addPhone().subscribe(phoneBook => console.log())
  }

}
