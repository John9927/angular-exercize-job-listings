import { DataService } from './../data.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TagsService } from '../tags.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent {
  @Input() public tag: string = '';
  @Input() public isDestroyable: boolean = false;
  @Input() public ifThereIs: boolean = false;
  @Output() public onClick: EventEmitter<void> = new EventEmitter();
  @Output() public onDestroy: EventEmitter<string> = new EventEmitter();

  constructor(private readonly tagsService: TagsService, private dataService: DataService) {}

  clicked() {
    this.onClick.emit();
    this.tagsService.selectTag(this.tag);
    // this.dataService.getDataWithFilters();
  }

  destroyClick() {
    this.onDestroy.emit(this.tag);
  }



}
