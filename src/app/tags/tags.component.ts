import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent {
  @Input() public tag: string = '';
  @Input() public isDestroyable: boolean = false;
  @Input() public ifThereIs: boolean = false;
  @Output() public onClick: EventEmitter<string> = new EventEmitter();
  @Output() public onDestroy: EventEmitter<string> = new EventEmitter();

  constructor() {}

  clicked() {
    this.onClick.emit(this.tag);
  }

  destroyClick() {
    this.onDestroy.emit(this.tag);
  }



}
