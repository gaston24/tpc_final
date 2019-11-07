import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import {Pelicula} from '../../models/pelicula';
import {PeliculaService} from '../../services/peliculas.services';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public mostrarPeliculas: boolean;
  public peliculas : Pelicula[];
  public favorita: Pelicula;
  public fecha: any;



  constructor(
    private _peliculaService: PeliculaService

  ) { 

    this.titulo = 'Componente pelicula';
    this.mostrarPeliculas = true;
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2020, 8, 12);
  }

  ngOnInit() {
    console.log(this.peliculas);
    console.log("Componente iniciado");
    console.log(this._peliculaService.holaMundo());
  }

  ngDoCheck(){
    console.log("DoCheck lanzado!")
  }

  cambiarTitulo(){
    this.titulo = "El titulo ha sido modificado";
  }

  ngOnDestroy(){
    console.log("el componenten se va a eliminar de la ejecucion instantanea");
  }

  ocultarPeliculas(){
    this.mostrarPeliculas = false;
  }

  mostrarFavorita(event){
    this.favorita = event.pelicula;
  }

}
