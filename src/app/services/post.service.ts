import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Post } from '../Post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private apiUrl = 'http://localhost:8080/post/'

  constructor(private http:HttpClient) {}

  getPosts (): Observable <Post[]> {
    return this.http.get<Post[]>(this.apiUrl+"all")
  }

  addPost (post:Post) :Observable<Post>{
    return this.http.post<Post>(this.apiUrl+"add",post,httpOptions)
  }

}
