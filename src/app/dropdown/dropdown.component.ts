import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  public filters: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Takes all data from filters.json
    this.dataService.getFilters().subscribe(data => this.filters = data);
  }


}
