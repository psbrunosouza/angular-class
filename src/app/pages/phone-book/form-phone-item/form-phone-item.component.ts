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
    //instancia o phoneItem
    this.phoneItem = new PhoneBookModel();

  //testa se a rota tem id ou não para separar o create de edit
  this.activatedRoute.params.subscribe((param) => {
    if(!param.id){
      return;
  }

  //carrega a função loadPhoneById
  this.loadPhoneById(param.id);
  })
}

  //carrega os atributos do phoneItem do id selecionado
  loadPhoneById(id: string): void {
    this.phoneBookService.findPhoneItem(id).subscribe((PhoneItem) => {
      this.phoneItem = PhoneItem;
    })
  }

  //salva os atributos dos inputs para a criação por meio do service
  createPhone(): void {
    this.phoneBookService.createPhone({...this.phoneItem, id: uuidv4()})//adiciona um UUID automático
      .subscribe(() => {
        this.router.navigate(['../'])
      })
  }

  //salva os atributos dos inputs para sobreescrever os dados salvo por meio do service
  updatePhone(): void {
    this.phoneBookService.editPhone(this.phoneItem)
      .subscribe(() => {
        this.router.navigate(['../'])
        //muda a rota para a rota pai
      })
  }

  //testa se a rota possui ID ou não, se possuir confirma a edição se nao confirma a criação
  onSubmit(): void {
    if(this.phoneItem.id){
      this.updatePhone();
  }else {
    this.createPhone();
  }
  }
  }
