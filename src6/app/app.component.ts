import { Component, NgModule, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsModule, NgModel } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-project';
  message='';
  handleEvent(data:string){
    this.message=data;
  }
  show=false;
  @ViewChild('container', {read:ViewContainerRef}) container!:ViewContainerRef;
  componentRef!:ComponentRef<HelloWorldComponent>;
  loadComponent(){
    this.container.clear();
    this.componentRef=this.container.createComponent(HelloWorldComponent);
  }
  show1=false;
  toggle(){
    this.show1=!this.show1;
  }
  items=['Apple','Banana','Cherry'];
  fruit='';
  isHighlighted=false;
  isRed=false;
  isVisible=true;
  name='';
  username='john doe';
  imageURL='https://angular.io/assets/images/logos/angular/angular.png';
  buttonLabel='Click Here!';
  today:number=Date.now();
  n:string='Angular Pipes Example';
  amount:number=2500;
  percentValue: number=0.4567;
  msg:string="Angular is Awesome";
  item:string[]=['Angular', 'React','Vue','Svelte', 'next'];
}

