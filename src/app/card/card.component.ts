import { DataService } from './../data.service';
import { Work } from './../interfaces/works';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  day = "1d ago";
  time = "full time";
  region = "USA only";

  public work: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe(data => this.work = data);
  }
}
