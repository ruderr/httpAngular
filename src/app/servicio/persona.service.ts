import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private httpClient: HttpClient) { }

  obtenerTodasLasPersonas(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/persona');
  }

  agregarPersona(persona: any): Observable<any> {
    let json =  JSON.stringify(persona);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post('http://localhost:3000/persona', json, { headers: headers});
  }

  eliminarPersona(identificador): Observable<any> {
    return this.httpClient.delete('http://localhost:3000/persona/' + identificador);
  }
}
