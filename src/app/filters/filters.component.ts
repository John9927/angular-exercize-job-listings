import { Work } from './../interfaces/works';
import { DataService } from './../data.service';
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

  readonly selectedTags$: Observable<string[]> = this.dataService.filter$;
  tags$: Observable<Filters[]> | any;
  private searchTerms = new Subject<string>();
  public tags: Work[] | undefined;

  constructor(private readonly tagsService: TagsService, private readonly dataService: DataService) { }

  ngOnInit() {
    this.tagsService.tags$.pipe(takeUntil(this.destroy$)).subscribe(
      (tag: string | null) => tag ? this.filtriSelezionati = [...this.filtriSelezionati, tag] : null
    )

    this.tags$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.tagsService.searchTags(term))
    )
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  setFilter(val: string) {
    this.dataService.AddNewFilter(val);
  }

  onClickTags(tag: string) {
    this.filtriSelezionati = [...this.filtriSelezionati, tag];

    if (this.value) {
    this.value.nativeElement.value = '';
    }
    this.searchTerms.next('');
    this.dataService.AddNewFilter(tag);
  }

  deleteFilter(tag: string) {
    this.dataService.removeFilter(tag);
  }


  onClear() {
    this.dataService.filter = [];
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
