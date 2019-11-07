import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

public user : any;
public campo : string;


  constructor() { 
    this.user = {
      nombre : '',
      apellido : '',
      bio : '',
      genero: ''
    };
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.user);
  }

  hasDadoClick(){
    alert("Has dado click!");
  }

  hasSalido(){
    alert("Has salido del input");
  }
  
  hasSalido2(){
    alert("Has salido del input con un enter");
  }

}
