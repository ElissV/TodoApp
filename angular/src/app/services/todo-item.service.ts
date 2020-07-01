import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoItem } from '../class/todo-item';
import { ifError } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {

  private baseUrl = "http://localhost:8080/api/todo/";

  constructor(private http: HttpClient) { }

  

  getAllItems(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.baseUrl);
  }

  saveItem(title: string) {
    return this.http.post<string>(this.baseUrl, title);
  }

  deleteItem(id: number) {
    const url = this.baseUrl + id;
    return this.http.delete(url);
  }

}