import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoVideo } from '../../models/InfoVideo';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-show-video',
  templateUrl: './show-video.component.html',
  styleUrls: ['./show-video.component.css']
})
export class ShowVideoComponent implements OnInit{
  video: InfoVideo|null = null;

  botonMegusta:boolean=true;
  botonPuntaje:boolean=true;

  constructor(private activatedRoute: ActivatedRoute,
              private route: Router,
              private videoService: VideoService){}

  ngOnInit(): void {
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
          }
        })
      }
    })
  }

  idUrl(url: String): string {
    // Elimina todo lo que está antes del primer 'v='
    let idVideo = url.split('v=')[1];

    return idVideo;
  }

  meGusta(meGusta:boolean){
    if(this.video!==null){
      if(meGusta)
      this.video.meGusta++;
      else this.video.noMeGusta++;
      
      this.botonMegusta=false;

      this.videoService.updateVideo(this.video).subscribe(data=>{})
    }
  }


  puntuar(puntaje: number){
    if(this.video!==null){
      this.video.estrellas.push(puntaje)
      
      this.botonPuntaje=false;

      this.videoService.updateVideo(this.video).subscribe(data=>{})
    }
  }

  puntaje(){
    let suma: number=0;
    let promedio:number=0;
    if(this.video!==null){
      for (let estrella of this.video.estrellas ){
        suma+=estrella;
      }
      promedio=suma/this.video.estrellas.length;
    }
    return promedio;
  }


}


