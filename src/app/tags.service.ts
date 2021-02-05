import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  private readonly tag = new BehaviorSubject<string | null>(null);
  private url = "http://localhost:3030/tags";
  tags$ = this.tag.asObservable();

  constructor(private http: HttpClient) { }


  selectTag(tag: string) {
    this.tag.next(tag);
  }

  searchTags(term: string): Observable<string[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<string[]>(`${this.url}/?name=${term}`).pipe(
      map(el => {
        return el.filter(tag => tag.toLocaleLowerCase().indexOf(term.toLocaleLowerCase().trim()) !== -1)
      }),
    );
  }



}
