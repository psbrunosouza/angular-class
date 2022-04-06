import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PhoneBookModel} from "../../../@core/model/phone-book.model";
import {PhoneBookService} from "../../../@core/api/phonebook.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-phone-item',
  templateUrl: './phone-item.component.html',
  styleUrls: ['./phone-item.component.scss'],
  providers: [PhoneBookService]
})
export class PhoneItemComponent implements OnInit {

  @Input() phoneItem: PhoneBookModel;

  @Input() phoneBook: PhoneBookModel[] = [];

  @Output() selectPhone$: EventEmitter<number> = new EventEmitter<number>();

  constructor(private phoneBookService: PhoneBookService, private router: Router) {
  }

  ngOnInit(): void {
  }

  act(): void {
    console.log("teste")
  }

  delete(id: number){
    this.phoneBookService.deleteTel(id).subscribe(() => {

    })
  }
}
