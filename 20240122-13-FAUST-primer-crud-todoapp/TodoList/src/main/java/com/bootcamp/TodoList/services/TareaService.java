package com.bootcamp.TodoList.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.TodoList.models.TareaModel;
import com.bootcamp.TodoList.repositories.TareaRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class TareaService {

	@Autowired // inyeccion de dependencias, conecta repositorio con servicio
	TareaRepository tareaRepo;

	// obtener tareas
	public List<TareaModel> getAllTareas() {
		return tareaRepo.findAll(); // equivalente a SELECT * FROM tareas, hecho por le repository, a traves de
									// JpaRepository
	}

	// obtener tarea por id
	public TareaModel getTareabyId(int id) {
		// findById retorna un Optional, si viene vacio arroja excepcion, sino devuelve
		// el recurso
		return tareaRepo.findById(id).orElseThrow(() -> notFound(id));
	}

	// crear tarea
	public TareaModel newTarea(TareaModel tarea) {
		if (tarea.getNombre().isEmpty() || tarea.getDescripcion().isEmpty()) {
			throw new IllegalArgumentException("El nombre y la descripción de la tarea no pueden estar vacíos");
		}
		try {
			return tareaRepo.save(tarea);
		} catch (Exception e) {
			throw new RuntimeException("Error al guardar la nueva tarea", e);
		}
	}

	// modificar tarea
	public String updateTarea(int id, TareaModel tarea) {
		Optional<TareaModel> taskExists = tareaRepo.findById(id);
		if(tarea.getNombre().isEmpty() || tarea.getDescripcion().isEmpty()) {
            throw new IllegalArgumentException("El nombre y la descripción de la tarea no pueden estar vacíos");
        }
		if (taskExists.isPresent()) {
			TareaModel t = taskExists.get();
			t.setNombre(tarea.getNombre());
			t.setDescripcion(tarea.getDescripcion());
			t.setFinalizado(tarea.isFinalizado());
			tareaRepo.save(t);
			return "Tarea " + t.getId() + " modificada correctamente";
		} else {
			throw notFound(id);
		}
	}

	// eliminar tarea
	public String deleteTarea(int id) {
		Optional<TareaModel> taskExists = tareaRepo.findById(id);
		if (taskExists.isPresent()) {
			TareaModel t = taskExists.get();
			t.setEliminado(true);
			tareaRepo.save(t);
			return "Tarea " + t.getId() + " eliminada correctamente";
		} else {
			throw notFound(id);
		}
    }

	private EntityNotFoundException notFound(int id) {
		return new EntityNotFoundException("No se encuentra la tarea para el id " + id);
	}

}
