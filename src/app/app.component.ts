import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = "";

  constructor() {
  }

  ngOnInit(): void {
    this.loadTitle();
  }

  loadTitle(): void {
    this.title = "Custo angular 1"
  }

  changeTitle(event: any): void {
    this.title = event;
  }
}
