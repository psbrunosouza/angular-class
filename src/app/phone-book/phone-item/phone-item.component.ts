import {Component, Input, OnInit} from '@angular/core';
import {PhoneBookModel} from "../phone-book.model";

@Component({
  selector: 'app-phone-item',
  templateUrl: './phone-item.component.html',
  styleUrls: ['./phone-item.component.scss']
})
export class PhoneItemComponent implements OnInit {

  @Input() phoneItem: PhoneBookModel;
  @Input() phoneBook: PhoneBookModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  deleteTel(selectedPhone: number): void{
    this.phoneBook = this.phoneBook.filter((phone) => phone.id !== selectedPhone)
  }

//  editTel(selectedPhone: string){
//     this.phoneBook = this.phoneItem.name
//  }
}
