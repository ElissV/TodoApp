package com.example.todolist.repository;

import com.example.todolist.entity.ToDoItem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ToDoItemRepo extends CrudRepository<ToDoItem, Long> {
    List<ToDoItem> findAll();
    List<ToDoItem> findAllByIsCompleted(Boolean isDone);
}
