import { Component, OnInit } from '@angular/core';
import { TodoItemService } from 'src/app/services/todo-item.service';
import { TodoItem } from 'src/app/class/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: TodoItem[];
  titleInput: string;

  constructor(private todoItemService: TodoItemService) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems() {
    this.todoItemService.getAllItems().subscribe(
      data => {
        this.todoList = data;
      }
    );
  }

  saveItem() {
    this.todoItemService.saveItem(this.titleInput).subscribe(
      data => {
        this.getAllItems();
      },
      error => {
        console.log(error);
      }
    );
    this.titleInput = '';
  }

  deleteItem(id: number) {
    this.todoItemService.deleteItem(id).subscribe(
      data => {
        this.getAllItems();
      },
      error => {
        console.log(error);
      }
    );
  }

}
