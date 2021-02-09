import { Work } from './interfaces/works';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const url = "http://localhost:3000/data";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private _filters = new BehaviorSubject<string[] | null>(null);
  filters$ = this._filters.asObservable();

  //Filter
  private readonly _filter = new BehaviorSubject<string>("");
  readonly filter$ = this._filters.asObservable();

  get filter(): string {
    return this._filter.getValue();
  }

  set filter(val: string) {
    console.log(val);
    this._filter.next(val);
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


  //
  // getFilter(): Observable<Work[]> {
  //   return
  //   }


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
