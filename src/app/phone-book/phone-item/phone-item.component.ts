import {Component, Input, OnInit} from '@angular/core';
import {PhoneBookModel} from "../phone-book.model";
import {PhoneBookComponent} from "../phone-book.component";

@Component({
  selector: 'app-phone-item',
  templateUrl: './phone-item.component.html',
  styleUrls: ['./phone-item.component.scss']
})
export class PhoneItemComponent implements OnInit {

  @Input() phoneItem: PhoneBookModel;
  @Input() phoneBook: PhoneBookComponent;

  constructor() { }

  ngOnInit(): void {
  }


}
