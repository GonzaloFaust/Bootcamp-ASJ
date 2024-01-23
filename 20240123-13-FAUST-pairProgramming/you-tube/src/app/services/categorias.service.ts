import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categorias: String []=[
    "Musica",
    "Educacion",
    "Ocio",
    "Deportes",
    "Moda",
    "Ciencia",
    "Geografia",
    "Historia",
    "Anime",
    "Infantil",
    "Memes"
  ]
  constructor() { }

  getCategorias():String[]{
    return this.categorias;
  }
}
