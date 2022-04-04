import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PhoneBookModel} from "../model/phone-book.model";
import {Observable} from "rxjs";

@Injectable()
export class PhoneBookService {
  baseUrl = "http://localhost:3000"


  constructor(private http: HttpClient) {}

  //Cria um card de numero de telefone no bookFone
  addPhone(phone: PhoneBookModel): Observable<PhoneBookModel>{
    return this.http.post<PhoneBookModel>(`${this.baseUrl}/phonebook`, phone)
  }

  //Lê a lista de numeros de telefone(bookFone)
  listPhonebook(): Observable<PhoneBookModel[]> {
    return this.http.get<PhoneBookModel[]>(`${this.baseUrl}/phonebook`);
  }

  //Atualiza os dados
  editPhone(selectedPhone: number): Observable<PhoneBookModel>{
    return this.http.put<PhoneBookModel>(`${this.baseUrl}/phonebook/${selectedPhone}`);
  }


  //Deleta o card de numero por meio do selectedPhone --> que é obtido pelo parametro do button no click
  deleteTel(selectedPhone: number): Observable<PhoneBookModel>{
    return this.http.delete<PhoneBookModel>(`${this.baseUrl}/phonebook/${selectedPhone}`);
  }


}
