import { Component } from '@angular/core';
import { ServicioService } from './service/servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias';
  informacion:any[];
  spinner:boolean=false;

  constructor( private servicio:ServicioService){
   this.informacion=[]
  }

  buscarContenido(contenido:any){
    this.spinner=true
    setTimeout(()=>{

    this.servicio.getDato(contenido).subscribe( data=>{
      console.log(data)
this.spinner=false
       this.informacion=data.articles;

    })
      
    },3000)
    


  }
}
