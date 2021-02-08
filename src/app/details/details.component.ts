import { Work } from './../interfaces/works';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public works: Work | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataSercive: DataService
    ) { }

  ngOnInit(): void {
    this.getId();
  }

  getId(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataSercive.getDetail(id)
      .subscribe(detail => this.works = detail);
  }
}
