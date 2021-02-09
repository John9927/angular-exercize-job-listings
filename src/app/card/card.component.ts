import { Work } from './../interfaces/works';
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card!: Work;
  @Output() public readonly onTagClick: EventEmitter<string> = new EventEmitter();

  onClickTag(tag: string) {
    this.onTagClick.emit(tag);
  }
}
