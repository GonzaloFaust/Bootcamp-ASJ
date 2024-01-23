package com.bootcamp.TodoList.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.TodoList.models.TareaModel;
import com.bootcamp.TodoList.services.TareaService;

import jakarta.persistence.EntityNotFoundException;


//ora forma de no renegar con los cors en vez del chorizo en el application.java (poner en cada controller)
//@CrossOrigin(origins = "http://localhost:54157")
@RestController
@RequestMapping("/tareas")
public class TareaController {
	
	@Autowired
	TareaService tareaService;
	
//	@GetMapping("/test")
//	public ResponseEntity<Optional<TareaModel>> getTest(){
//		return null;S
//	}
	
	
	@GetMapping()
	public ResponseEntity<List<TareaModel>> getTareas() {
		List<TareaModel> tareas= tareaService.getAllTareas();
		return tareas.isEmpty()
				? ResponseEntity.noContent().build()
				: ResponseEntity.ok(tareas);
		
//		return new ResponseEntity<List<TareaModel>>(tareaService.getAllTareas(), HttpStatus.OK);
//		return ResponseEntity.ok(tareaService.getAllTareas());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<TareaModel> getTareaById(@PathVariable int id) {
		try {
			TareaModel tarea = tareaService.getTareabyId(id);
			return ResponseEntity.ok(tarea);
		}
		catch(EntityNotFoundException e) {
			return ResponseEntity.notFound().build();
		}
//		Optional<TareaModel> tarea= tareaService.getTareabyId(id);
//		return tarea.isPresent()
//				? ResponseEntity.ok(tarea.get())
//				: ResponseEntity.notFound().build();
		
//		return ResponseEntity.ok(tareaService.getTareabyId(id));
	}
	
	@PostMapping()
	public ResponseEntity<TareaModel> createTarea( @RequestBody TareaModel tarea){
		if(tarea.getNombre().isEmpty() || tarea.getDescripcion().isEmpty())
			return ResponseEntity.badRequest().build();
		
		return new ResponseEntity<>( tareaService.newTarea(tarea),HttpStatus.CREATED);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> updateTarea(@PathVariable int id, @RequestBody TareaModel tarea){
		if(tarea.getNombre().isEmpty() || tarea.getDescripcion().isEmpty()) {
			return ResponseEntity.badRequest().build();
		}
		try {
            return ResponseEntity.ok(tareaService.updateTarea(id, tarea));
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
		
		//controlar la excepcion que puede venir del servicio
//		return new ResponseEntity<String>(tareaService.updateTarea(id,tarea), HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTarea(@PathVariable int id){
        try {
            return ResponseEntity.ok(tareaService.deleteTarea(id));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }
	
}
