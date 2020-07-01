import { Component, OnInit } from '@angular/core';
import { TodoItemService } from 'src/app/services/todo-item.service';
import { TodoItem } from 'src/app/class/todo-item';
import { Filter } from 'src/app/class/filter';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: TodoItem[];
  filterOptions: Filter[];
  chosenFilterValue: Filter;
  titleInput: string;

  constructor(private todoItemService: TodoItemService) { }

  ngOnInit(): void {
    this.getAllItems();
    this.setFilters();
  }

  setFilters() {
    this.filterOptions = [
      {"name": "All", "boolValue": null},
      {"name": "Active", "boolValue": false},
      {"name": "Completed", "boolValue": true}
    ];
    this.chosenFilterValue = this.filterOptions[0];
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
      }
    );
    this.titleInput = '';
  }

  deleteItem(id: number) {
    this.todoItemService.deleteItem(id).subscribe(
      data => {
        this.getAllItems();
      }
    );
  }

  changeItemStatus(itemId: number) {
    this.todoItemService.changeItemStatus(itemId).subscribe(
      data => {
        this.getAllItems();
      }
    );
  }

  filterItems(filter: Filter) {
    this.chosenFilterValue = filter;
    this.todoItemService.filterItemsByStatus(this.chosenFilterValue.boolValue).subscribe(
      data => {
        this.todoList = data;
      }
    );
  }

}