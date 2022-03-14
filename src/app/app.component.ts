import {Component, OnInit} from '@angular/core';

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

  submit() {
    console.log(this.nome, this.idade, this.CPF, this.email)
  }
  teste(){
    if (this.idade < 18){
      console.log('Menor de idade')
    } else {
      console.log('maior de idade')
    }
  }
}

