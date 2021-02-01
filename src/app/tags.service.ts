import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  private readonly tag = new BehaviorSubject<string | null>(null);

  constructor() { }

  tags$ = this.tag.asObservable();

  selectTag(tag: string) {
    this.tag.next(tag);
  }
}
