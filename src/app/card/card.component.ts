import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public work: any;
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe( data => {this.work = data}, err => {console.log("Attiva il server mock-list.json con il comando json-server -w mock-list.json per visualizzare i dati")});
  }

  // this.work = data -> funziona
  // this.dataService.works = data




}
