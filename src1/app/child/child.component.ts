import { Component } from '@angular/core';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [LoggerService]
})
export class ChildComponent {
    constructor( private logger:LoggerService){
      this.logger.log('Child Component logger instance');
    }
}
