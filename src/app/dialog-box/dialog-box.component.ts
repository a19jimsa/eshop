import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css'],
})
export class DialogBoxComponent {
  @Output() eventEmitter = new EventEmitter<boolean>();

  constructor() {}

  onClose() {
    this.eventEmitter.emit(false);
  }
}
