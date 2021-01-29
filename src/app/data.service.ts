import { Works } from './interfaces/works';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const url = "http://localhost:3000/data";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Works[]> {
  return this.http.get<Works[]>(url);
  }

  getDetail(id: number): Observable<Works>{
    return this.http.get<Works>(`${url}/${id}`);
  }

}
