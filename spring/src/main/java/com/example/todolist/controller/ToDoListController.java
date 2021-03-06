package com.example.todolist.controller;

import com.example.todolist.entity.ToDoItem;
import com.example.todolist.repository.ToDoItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/todo")
@CrossOrigin("http://localhost:4200")
public class ToDoListController {

    private ToDoItemRepo itemRepo;

    @Autowired
    public ToDoListController(ToDoItemRepo itemRepo) {
        this.itemRepo = itemRepo;
    }


    @GetMapping
    public List<ToDoItem> getAllItems() {
        return itemRepo.findAll();
    }

    @GetMapping("/{id}")
    public Optional<ToDoItem> getItem(@PathVariable Long id) {
        return itemRepo.findById(id);
    }

    @GetMapping("/filterByStatus")
    public List<ToDoItem> getFilteredValues(
            @RequestParam Boolean isCompleted) {
        return itemRepo.findAllByIsCompleted(isCompleted);
    }

    @PostMapping
    public void saveItem(@RequestBody String title) {
        boolean doesntContainOnlySpaces =
                !(title.replace(" ", "").isEmpty());

        if (!title.isEmpty() && doesntContainOnlySpaces) {
            ToDoItem item = new ToDoItem(title);
            itemRepo.save(item);
        }
    }

    @PatchMapping("/{id}")
    public void changeItemStatus(@PathVariable Long id) {
        itemRepo.findById(id)
                .map(item -> {
                    boolean isDone = item.getIsCompleted();
                    item.setIsCompleted(!isDone);
                    return itemRepo.save(item);
                });
    }

    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable Long id) {
        itemRepo.deleteById(id);
    }

}