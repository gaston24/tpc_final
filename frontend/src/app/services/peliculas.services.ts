import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{

public peliculas: Pelicula[];

constructor(){
    this.peliculas = [
        new Pelicula("spiderman 4", 2019, "https://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/spider-man-2-promo-art.jpg?itok=MFKxiS7g"),
        new Pelicula("Los vengadores", 2019, "https://www.ecestaticos.com/imagestatic/clipping/981/237/9812379af1063c770a37c82b19ada0f6/los-vengadores-sociedad-anonima.jpg?mtime=1430317539"),
        new Pelicula("thor", 2019, "https://img.chilango.com/2017/08/dr-strange-en-thor-ragnarok.png")
      ];
}

    holaMundo(){
        return 'Hola mundo desde un servicio';
    }

    getPeliculas(){
        return this.peliculas;
    }
}