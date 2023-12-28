import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import { Flowers } from '../models/flowers.model';

@Injectable({
  providedIn: 'root'
})
export class FlowersService {

  // baseUrl='http://localhost:3209/prj';
  baseUrl='http://10.30.40.121:3209/prj';

  constructor(private http: HttpClient) { }

  getAll():Observable<Flowers[]>{
    return this.http.get<Flowers[]>(`${this.baseUrl}/liretous`);
  }
  create(data: any):Observable<any>{
    return this.http.post(`${this.baseUrl}/ajouterfleur`, data)
  }
  findById(_id: any): Observable<Flowers>{
    return this.http.get<Flowers>(`${this.baseUrl}/lirefleur/${_id}`);
  }

  update(_id: any, data: any): Observable<any>{
    return this.http.put(`${this.baseUrl}/modifierfleur/${_id}`,data);
  }

  delete(_id:any, data:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/supprimerfleur/${_id}`,data);
  }
}


