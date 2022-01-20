import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Category } from '../Categoty';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'http://localhost:8080/category/';

  constructor(private http:HttpClient) { }

  getCategories (): Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl+"all")
  }

  addCategory (category:Category) : Observable <Category> {
    return this.http.post<Category>(this.apiUrl+"add", category,httpOptions)
  }

}
