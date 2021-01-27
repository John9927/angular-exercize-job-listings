import { Work } from './../interfaces/works';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
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

  onClickFlagNew() {
    console.log("Flag New");
  }
  onClickFlagFeatured() {
    console.log("Flag Featured");
  }
  onClickFrontend() {
    console.log("Frontend");
  }
  onClickSenior() {
    console.log("Senior");
  }
  onClickHtml() {
    console.log("Html");
  }
  onClickCss() {
    console.log("Css");
  }
  onClickJavascript() {
    console.log("Javascript");
  }
}
