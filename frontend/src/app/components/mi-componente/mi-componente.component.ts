import {Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})



export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;
    
    

    constructor (){
        this.titulo = 'Hola mundo, soy Mi componente';
        this.comentario = 'este es mi primer componente';
        this.year = 2020;
       
        console.log("Mi componente cargado");
        console.log(this.titulo, this.comentario, this.year);
    }
}
