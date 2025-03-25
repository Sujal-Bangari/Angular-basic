import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-clicker',
  templateUrl: './button-clicker.component.html',
  styleUrls: ['./button-clicker.component.css']
})
export class ButtonClickerComponent {
  @Output() clicked=new EventEmitter<string>();
  handleClick(){
    this.clicked.emit("button was clicked!");
  }
}
