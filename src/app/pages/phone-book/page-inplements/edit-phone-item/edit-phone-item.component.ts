import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PhoneBookService} from "../../../../@core/api/phonebook.service";
import {FormControl} from "@angular/forms";
import {PhoneBookModel} from "../../../../@core/model/phone-book.model";

@Component({
  selector: 'app-edit-phone-item',
  templateUrl: './edit-phone-item.component.html',
  styleUrls: ['./edit-phone-item.component.scss']
})
export class EditPhoneItemComponent implements OnInit {

  @Input() phoneItem: PhoneBookModel;

  @Input() phoneBook: PhoneBookModel[] = [];

  @Output() selectPhone$: EventEmitter<number> = new EventEmitter<number>();

  constructor(private phoneBookService: PhoneBookService) {
  }
  id = new FormControl(PhoneBookModel);
  name = new FormControl(PhoneBookModel.name);
  phone = new FormControl(PhoneBookModel);
  status = new FormControl(PhoneBookModel);
  cpf = new FormControl(PhoneBookModel);
  isInternational = new FormControl(PhoneBookModel);
  idade = new FormControl(PhoneBookModel);
  auxiliarPhones = new FormControl(PhoneBookModel);

  ngOnInit(): void {
  }

//  editTel(selectedPhone: id){
//    this.phoneBook = this.phoneItem.name
//  }
  edit(id: number){
    this.phoneBookService.editPhone(this.phoneItem).subscribe((phone) => {console.log(phone)})
  }

}
