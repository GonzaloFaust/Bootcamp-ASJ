import { Component, OnInit } from '@angular/core';
import { InfoVideo } from '../../models/InfoVideo';
import { VideoService } from '../../services/video.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-video',
  templateUrl: './form-video.component.html',
  styleUrls: ['./form-video.component.css']
})
export class FormVideoComponent implements OnInit{
  video: InfoVideo = {
    id: 0,
    url: '',
    categoria: '',
    titulo:  '',
    descripcion:  '',
    vistas: 0,
    meGusta: 0,
    noMeGusta: 0,
    estrellas: [],
    eliminado: false,
  }

  edit:boolean= false;

  categorias:String[]=[];

  constructor(private activatedRoute: ActivatedRoute, private route:Router,private videoService: VideoService, private categoriasService:CategoriasService){}

ngOnInit(): void {
  this.categorias= this.categoriasService.getCategorias();

  this.activatedRoute.queryParamMap.subscribe((params)=>{
    let id = params.get('id') || null;

    if(id === null){
      this.route.navigate(['/index']);
    }else{
      this.videoService.getVideoById(parseInt(id)).subscribe((data)=>{
        if(data === null){
          this.route.navigate(['/index']);

        }else{
          this.video = data;
          this.edit =true;
        }
      })
    }
  })
}


  eliminar(){
    this.videoService.deleteVideo(this.video).subscribe(videos=>{
      console.log(videos);
      this.route.navigate(['/index']);
    })
  }

  submit(){
    if(this.edit){
      this.videoService.updateVideo(this.video).subscribe(videos=>{
        console.log(videos);
      })
    }
    else
    {
      this.videoService.postVideo(this.video).subscribe(videos=>{
        console.log(videos);
      })
    }
    this.route.navigate(['/index']);
  }
}

