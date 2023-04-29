import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Rento } from '../model/rento';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class RentoService {

  private  url = `${baseUrl}/users`;

  constructor(private http:HttpClient)  { }

  register(rento : Rento){
    return this.http.post(this.url,  rento);
  }

  list(): Observable<any>{
     return this.http.get<Rento[]>(this.url);
  }

  login(user: string, password: number) {
    return this.http.get(`${this.url}?user=${user}&password=${password}`);
  }


}
