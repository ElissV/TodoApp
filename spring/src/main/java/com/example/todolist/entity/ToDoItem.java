package com.example.todolist.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class ToDoItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private Boolean isDone = false;

}