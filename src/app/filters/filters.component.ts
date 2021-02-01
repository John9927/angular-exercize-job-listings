import { Component, OnInit, OnDestroy } from '@angular/core';
import { TagsService } from '../tags.service';
import { takeUntil } from "rxjs/operators";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject();

  public filtriSelezionati: string[] = [];

  constructor(private readonly tagsService: TagsService) {}

  ngOnInit() {
    this.tagsService.tags$.pipe(takeUntil(this.destroy$)).subscribe(
     (tag: string | null) => tag ? this.filtriSelezionati = [...this.filtriSelezionati, tag] : null
    )
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
