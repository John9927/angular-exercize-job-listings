import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  title = "Photosnap";
  description = "Senior Frontend Developer";
  day = "1d ago";
  time = "Full Time";
  region = "USA Only";

  constructor() { }

  ngOnInit(): void {
  }

}
