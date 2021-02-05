import { Works } from './interfaces/works';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const url = "http://localhost:3000/data";

const tags = ['css', 'scss', 'frontend', 'ruby'];
const filtriSelezionati = ['css'];
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Works[]> {
    return this.http.get<Works[]>(url);
  }

  getDataWithFilters(filters: string[]): Observable<Works[]> {
    return this.http.get<Works[]>(url).pipe(
      // mappiamo i Works e filtriamo i tags
      map((works: Works[]) => {
       return works.filter((w: Works): any => {
          const myVariable = filters.reduce((acc, f) => { return acc || w.tags.includes(f) }, false)
          if(myVariable) {
            return w
          }
        })
      }),

    );
  }

  getDetail(id: number): Observable<Works> {
    return this.http.get<Works>(`${url}/${id}`);
  }

}
