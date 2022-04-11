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

  @Input() phoneItem: PhoneBookModel;

  @Output() selectPhone$: EventEmitter<number> = new EventEmitter<number>();

  @Output() contactsEvent = new EventEmitter();

  constructor(private phoneBookService: PhoneBookService) {
  }

  ngOnInit(): void {
  }

  delete(id: string): void{
    this.phoneBookService.deletePhone(id).subscribe(() => {
      this.contactsEvent.emit(null);
    })
  }
}
