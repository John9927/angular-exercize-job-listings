import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobListings',
  templateUrl: './jobListings.component.html',
  styleUrls: ['./jobListings.component.scss']
})
export class JobListingsComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe(data => {
      this.dataService.works = data
      this.dataService.filter = [];
    }, err => { console.log("Attiva il server mock-list.json con il comando json-server -w mock-list.json per visualizzare i dati") });
  }

  setSelectedFilter(tag: string) {
    this.dataService.AddNewFilter(tag);
    console.log('tag: ',tag);
  }
}
