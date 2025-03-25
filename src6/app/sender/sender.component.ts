import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent {
  constructor(private messageService:MessageService){}
  sendMessage(){
    this.messageService.changeMessage('Hello from Sender!');
  }
}
