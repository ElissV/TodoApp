import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {

  baseUrl = "http://localhost:8080/api/todo";

  constructor(private http: HttpClient) { }



}
