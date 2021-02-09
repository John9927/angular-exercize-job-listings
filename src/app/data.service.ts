import { Work } from './interfaces/works';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

const url = "http://localhost:3000/data";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  //Filter
  private readonly _filter = new BehaviorSubject<string[]>([]);
  readonly filter$ = this._filter.asObservable();

  get filter(): string[] {
    return this._filter.getValue();
  }

  set filter(val: string[]) {
    this._filter.next(val);
  }

  AddNewFilter(val: string) {
    if (!this.filter.includes(val)) {
    const newFilters = this.filter.length > 0 ? [...this.filter, val] : [val];
    console.log(newFilters)
    this._filter.next(newFilters);
    }
  }

  removeFilter(val: string) {
    const newFilters = this.filter.filter(f => f !== val);
    this._filter.next(newFilters);
  }
  //Works
  private readonly _works = new BehaviorSubject<Work[]>([]);
  readonly works$ = this._works.asObservable();

  get works(): Work[] {
    return this._works.getValue();
  }

  set works(val: Work[]) {
    this._works.next(val);
  }

  getData(): Observable<Work[]> {
    return this.http.get<Work[]>(url);
  }



  getDataWithFilters(filters: string[]): Observable<Work[]> {
    return this.http.get<Work[]>(url).pipe(
      // mappiamo i Works e filtriamo i tags raggruppandoli in una variabile
      map((works: Work[]) => {
        return works.filter((w: Work): any => {
          const myVariable = filters.reduce((acc, f) => { return acc || w.tags.includes(f) }, false)
          if(myVariable) {
            return w
          }
        })
      })
    );
  }

  getDetail(id: number): Observable<Work> {
    return this.http.get<Work>(`${url}/${id}`);
  }

}
