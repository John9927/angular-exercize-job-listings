import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
  @Input() public tag: string | undefined;
  @Input() public isDestroyable: boolean = false;
  @Input() public ifThereIs: boolean = false;
  @Output() public onClick: EventEmitter<void> = new EventEmitter();
  @Output() public onDestroy: EventEmitter<string> = new EventEmitter();


  clicked() {
    this.onClick.emit();
  }

  destroyClick() {
    this.onDestroy.emit(this.tag);
  }

}
