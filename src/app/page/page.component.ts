import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  @Input() nome = "";
  @Input() idade: number;
  @Input() CPF: number;
  @Input() email: string;

  constructor() { }

  ngOnInit(): void {
  }

}
