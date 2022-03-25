import {Component, Input, OnInit} from '@angular/core';
import {PhoneBookModel} from "../../../@core/model/phone-book.model";

@Component({
  selector: 'app-phone-item',
  templateUrl: './phone-item.component.html',
  styleUrls: ['./phone-item.component.scss']
})
export class PhoneItemComponent implements OnInit {

  @Input() phoneItem: PhoneBookModel;

  constructor() { }

  ngOnInit(): void {
  }

  act(): void {
    console.log("teste")
  }
}
