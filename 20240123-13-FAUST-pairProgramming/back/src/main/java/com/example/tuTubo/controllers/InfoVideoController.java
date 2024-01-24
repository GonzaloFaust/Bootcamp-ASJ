package com.example.tuTubo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.tuTubo.models.InfoVideoModel;
import com.example.tuTubo.services.infoVideoService;

@RestController
@RequestMapping("/infovideo")
@CrossOrigin(origins="http://localhost:4200")
public class InfoVideoController {
	
	@Autowired
	infoVideoService inforVideoService;

	@GetMapping()
	public ResponseEntity<List<InfoVideoModel>> getVideos()
	{
		return ResponseEntity.ok(inforVideoService.obtenerVideos());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<InfoVideoModel>> getVideosById(@PathVariable int id ){
		return ResponseEntity.ok(inforVideoService.obtenerVideoById(id));
	}
	
	@PostMapping()
	public ResponseEntity<List<InfoVideoModel>> createVideo( @RequestBody InfoVideoModel video){
		return ResponseEntity.ok(inforVideoService.crearVideo(video));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<List<InfoVideoModel>> updateVideo(@PathVariable int id, @RequestBody InfoVideoModel video){
		return ResponseEntity.ok(inforVideoService.modificarVideo(id,video));
	}
	
	
    @DeleteMapping("/{id}")
    public ResponseEntity<List<InfoVideoModel>> deleteVideo(@PathVariable int id) {
        return ResponseEntity.ok(inforVideoService.eliminarVideo(id));
    }
}
