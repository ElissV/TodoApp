import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoItem } from '../class/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {

  private baseUrl = "http://localhost:8080/api/todo";

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.baseUrl);
  }

  

}