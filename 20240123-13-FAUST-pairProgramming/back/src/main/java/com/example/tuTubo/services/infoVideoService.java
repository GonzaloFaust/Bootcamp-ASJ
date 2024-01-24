package com.example.tuTubo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tuTubo.models.InfoVideoModel;
import com.example.tuTubo.repositories.infoVideoRepository;

@Service
public class infoVideoService {

	@Autowired
	infoVideoRepository inforVideoRepo;
	
	public List<InfoVideoModel> obtenerVideos(){
		return inforVideoRepo.findAll();
	}
	
	public Optional<InfoVideoModel> obtenerVideoById(int id) {
		return inforVideoRepo.findById(id);
	}
	
	public List<InfoVideoModel> crearVideo(InfoVideoModel video){
		inforVideoRepo.save(video);
		return inforVideoRepo.findAll();
	}
	
	public List<InfoVideoModel> eliminarVideo(int id){
		InfoVideoModel v = inforVideoRepo.findById(id).get();
		if(v!= null) {
			v.setEliminado(true);
			inforVideoRepo.save(v);
		}
		return inforVideoRepo.findAll();
	}
	
	
	public List<InfoVideoModel> modificarVideo(int id, InfoVideoModel video){
		InfoVideoModel v = inforVideoRepo.findById(id).get();
		if(v!= null) {
			v.setCategoria(video.getCategoria());
			v.setDescripcion(video.getDescripcion());
			v.setEstrella(video.getEstrellas());
			v.setMeGusta(video.getMeGusta());
			v.setNoMeGusta(video.getNoMeGusta());
			v.setTitulo(video.getTitulo());
			v.setUrl(video.getUrl());
			v.setVistas(video.getVistas());
			inforVideoRepo.save(v);
		}
		return inforVideoRepo.findAll();
	}
	
}
