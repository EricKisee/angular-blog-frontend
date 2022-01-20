import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Author } from '../Author';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private apiUrl = 'http://localhost:8080/author/'

  constructor(private http:HttpClient) { }

  getAuthors () : Observable<Author[]>{
    return this.http.get<Author[]>(this.apiUrl+"all")
  }

  addAuthor (author:Author) : Observable <Author> {
    return this.http.post<Author>(this.apiUrl+"add", author,httpOptions)
  }
}
