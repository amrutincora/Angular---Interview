import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inverted-child',
  templateUrl: './inverted-child.component.html',
  styleUrls: ['./inverted-child.component.css']
})
export class InvertedChildComponent {
  inputText:string = '';
  @Output() textSubmitted = new EventEmitter<string>();

  onSubmit(){
    this.textSubmitted.emit(this.inputText);
  }
}
