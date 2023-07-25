import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listar-noticia',
  templateUrl: './listar-noticia.component.html',
  styleUrls: ['./listar-noticia.component.css']
})
export class ListarNoticiaComponent {
 @Input() noticias:any[]=[]



}
