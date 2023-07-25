import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor( private http:HttpClient) {

 
   }
   getDato(parametros:any): Observable<any> {
const URL ='https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+parametros.categoria+'&apiKey=f300f1d6a4e9463a9796dece364f91e2';
console.log(URL)
 return this.http.get(URL)
   }
}
