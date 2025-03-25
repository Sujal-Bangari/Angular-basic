import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent {
  message='';
  constructor(private messageService:MessageService){
    this.messageService.currentMessage.subscribe(msg=>this.message=msg);
  }
}
