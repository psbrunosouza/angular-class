import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  nome = "";
  idade: number;
  CPF: number;
  email: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  submit(formRef: NgForm){
    if(formRef.valid){
      console.log(this.nome, this.CPF, this.idade, this.email)
      console.log(formRef)
      // salva/ envia o dado
    }else {
      console.log("Seu email nn é valido")
      // exibe um retorno informando que deu errado
    }
  }
  maiorIdade(){
    if (this.idade < 18){
      console.log('Menor de idade')
    } else {
      console.log('maior de idade')
    }
  }

  nomeMaiusculo(){
    let nomeMai = this.nome.toUpperCase()
    console.log(nomeMai)
  }

  nomeMinusculo(){
    let nomeMin = this.nome.toLowerCase()
    console.log(nomeMin)
  }
}

