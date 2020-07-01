package com.example.todolist.controller;

import com.example.todolist.entity.ToDoItem;
import com.example.todolist.repository.ToDoItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todo")
public class ToDoListController {

    private ToDoItemRepo itemRepo;

    @Autowired
    public void setRepo(ToDoItemRepo itemRepo) {
        this.itemRepo = itemRepo;
    }


    @GetMapping
    public List<ToDoItem> getAllItems() {
        return itemRepo.findAll();
    }

    @PostMapping
    public void saveItem(@RequestBody ToDoItem item) {
        itemRepo.save(item);
    }

    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable(required = true) Long id) {
        itemRepo.deleteById(id);
    }

}