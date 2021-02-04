import { Filters } from './../interfaces/filters';

import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { TagsService } from '../tags.service';
import { debounceTime, distinctUntilChanged, switchMap, takeUntil } from "rxjs/operators";
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {

  @ViewChild('searchBox') value: ElementRef<HTMLInputElement> | undefined;

  private readonly destroy$: Subject<void> = new Subject();
  public filtriSelezionati: string[] = [];

  tags$: Observable<Filters[]> | any;
  private searchTerms = new Subject<string>();


  constructor(private readonly tagsService: TagsService) { }

  ngOnInit() {
    this.tagsService.tags$.pipe(takeUntil(this.destroy$)).subscribe(
      (tag: string | null) => tag ? this.filtriSelezionati = [...this.filtriSelezionati, tag] : null
    ),
    this.tags$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.tagsService.searchTags(term)),
    )
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  onClickTags(tag: string) {
    this.filtriSelezionati = [...this.filtriSelezionati, tag];

    if (this.value) {
    this.value.nativeElement.value = '';
    }
    this.searchTerms.next('');
  }

  onClick() {
    console.log("Click Remove");
  }

  deleteFilter(tag: string) {
    this.filtriSelezionati = this.filtriSelezionati.filter(el => el !== tag);
  }

  onClear() {
    this.filtriSelezionati = [];
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }



}
