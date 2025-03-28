import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dependency-lab';
  message:string;
  constructor(private myservice:MyServiceService){
    this.message=this.myservice.getMessage();
  }
}
