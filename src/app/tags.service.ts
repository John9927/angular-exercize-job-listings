import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  private tags = new Subject<string>();

  constructor() { }

  tags$ = this.tags.asObservable();

  inTags(tag: string) {
    this.tags.next(tag);
  }
}
