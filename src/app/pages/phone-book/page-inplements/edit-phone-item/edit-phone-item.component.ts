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

//  editTel(selectedPhone: id){
//    this.phoneBook = this.phoneItem.name
//  }

  delete(id: number){
    this.phoneBookService.deleteTel(id).subscribe((phone) => {console.log(phone)})
  }

}
