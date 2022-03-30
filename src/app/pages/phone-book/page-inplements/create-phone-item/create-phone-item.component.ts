import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-create-phone-item',
  templateUrl: './create-phone-item.component.html',
  styleUrls: ['./create-phone-item.component.scss']
})
export class CreatePhoneItemComponent implements OnInit {

  constructor() { }

  name = new FormControl('');
  phone = new FormControl('');
  status = new FormControl('');
  cpf = new FormControl('');
  isInternational = new FormControl(false);
  idade = new FormControl();
  auxiliarPhones = new FormControl('');

  ngOnInit(): void {
  }

}
