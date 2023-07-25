import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

contenidoCategoria:string;
contenidoPais:string;

@Output() objeto= new EventEmitter<any>();


constructor(){
  this.contenidoCategoria='deportes';
  this.contenidoPais='Argentina'
}

ngOnInit(){
  
}


   categoria:any[]=[
    {value:"general", nombre:"general" },
    {value:"business",  nombre:"negocios"},
    {value:"health",  nombre:"salud"},
    {value:"science",  nombre:"ciencia"},
    {value:"sports",  nombre:"deportes"},
    {value:"technology",  nombre:"tecnologia"},


    

  ]


  pais:any[]=[
    {value:"ar", nombre:"Argentina" },
    {value:"br",  nombre:"Brazil"},
    {value:"fr",  nombre:"Francia"},
    {value:"hu",  nombre:"Hungria"},
    {value:"mx",  nombre:"Mexico"},
    {value:"gb",  nombre:"Reino Unido"},


    

  ]

  enviar():void{
const objetoDatos={
  categoria:this.contenidoCategoria,
  pais:this.contenidoPais


}
this.objeto.emit(objetoDatos)
  }
  


}
