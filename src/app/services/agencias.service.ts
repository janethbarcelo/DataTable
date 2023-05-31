import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RespuestaAgencia } from '../interfaces/agencias';


@Injectable({
  providedIn: 'root'
})
export class AgenciasService {

  constructor(private http: HttpClient) { }

  getAgencia(): Observable<RespuestaAgencia[]> {
    return this.http.get<RespuestaAgencia[]>(environment.agenciasUrl)

  }

}

