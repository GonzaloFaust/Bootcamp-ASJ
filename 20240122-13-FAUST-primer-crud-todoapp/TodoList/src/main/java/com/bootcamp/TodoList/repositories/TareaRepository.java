package com.bootcamp.TodoList.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.TodoList.models.TareaModel;

public interface TareaRepository extends JpaRepository<TareaModel, Integer> {

}
