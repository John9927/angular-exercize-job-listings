import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input() public tag: string | undefined;
  @Input() public isDestroyable: boolean = false;
  @Output() public onClick: EventEmitter<void> = new EventEmitter();
  @Output() public onDestroy: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clicked() {
    this.onClick.emit();
  }

  destroyClick() {
    this.onDestroy.emit(this.tag);
  }




}
