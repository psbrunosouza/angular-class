import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PhoneBookModel} from "../../../@core/model/phone-book.model";
import{PhoneBookService} from "../../../@core/api/phonebook.service";
import {ActivatedRoute, Router} from "@angular/router";
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-form-phone-item',
  templateUrl: './form-phone-item.component.html',
  styleUrls: ['./form-phone-item.component.scss'],
  providers:[PhoneBookService]
})
export class FormPhoneItemComponent implements OnInit {

  phoneItem: PhoneBookModel;

  constructor(
    private phoneBookService: PhoneBookService,
    private router: Router,
    private activatedRoute: ActivatedRoute
) { }

  ngOnInit(): void {
    this.phoneItem = new PhoneBookModel();

  this.activatedRoute.params.subscribe((param) => {
    if(!param.id){
  return;
  }

  this.loadPhoneById(param.id);
  })
}

  loadPhoneById(id: string): void {
    this.phoneBookService.findPhoneItem(id).subscribe((PhoneItem) => {
      this.phoneItem = PhoneItem;
    })
  }

  createPhone(): void {
    this.phoneBookService.createPhone({...this.phoneItem, id: uuidv4()})
      .subscribe(() => {
        this.router.navigate(['../'])
      })
  }

  updatePhone(): void {
    this.phoneBookService.editPhone(this.phoneItem)
      .subscribe(() => {
        this.router.navigate(['../'])
      })
  }

  onSubmit(): void {
    if(this.phoneItem.id){
    this.updatePhone();
  }else {
    this.createPhone();
  }
  }
  }
