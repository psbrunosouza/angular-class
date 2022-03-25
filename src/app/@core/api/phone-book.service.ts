import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PhoneBookModel} from "../model/phone-book.model";
import {Observable} from "rxjs";

@Injectable()
export class PhoneBookService {
  baseUrl = "http://localhost:3000"

  constructor(private http: HttpClient) {}

  listPhonebook(): Observable<PhoneBookModel[]> {
    return this.http.get<PhoneBookModel[]>(`${this.baseUrl}/phonebook`);
  }
}




