import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {


  public filtriSelezionati: string[] = [
    'Css',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log("Click Remove");
  }

  deleteFilter(tag: string) {
    this.filtriSelezionati = this.filtriSelezionati.filter(el => el !== tag);
  }


}
