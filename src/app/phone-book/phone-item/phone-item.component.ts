import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PhoneBookModel} from "../../@core/data/phone-book.model";

@Component({
  selector: 'app-phone-item',
  templateUrl: './phone-item.component.html',
  styleUrls: ['./phone-item.component.scss']
})
export class PhoneItemComponent implements OnInit {

  @Input() phoneItem: PhoneBookModel;

  @Input() phoneBook: PhoneBookModel[] = [];

  @Output() selectPhone$: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTel(selectedPhone: number): void{
    this.selectPhone$.emit(selectedPhone);
  }

//  editTel(selectedPhone: string){
//     this.phoneBook = this.phoneItem.name
//  }
}
