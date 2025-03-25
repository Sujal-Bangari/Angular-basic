import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

// const simpleObservable = new Observable(obsrver=>{
//   obsrver.next('First value');
//   obsrver.next('Second Value');
//   obsrver.next('Third Value');
//   obsrver.complete();
// });
// simpleObservable.subscribe({
//   next:value=>console.log(value),
//   complete:()=>console.log('Observable completed')
// });

// const observer={
//   next: (value:any)=>console.log('Observer got: '+value),
//   error: (err:any)=>console.log('Observer error: '+err),
//   complete: ()=>console.log('Obserever complete')
// };
// const observable= new Observable(subsriber=>{
//   subsriber.next('Data 1');
//   subsriber.next('Data 2');
//   subsriber.error('Something went wrong');
//   subsriber.complete();
// });
// observable.subscribe(observer);

const subject = new Subject<number>();
subject.subscribe(val=>console.log('Subscriber A: '+val));
subject.subscribe(val=>console.log('Subscriber B: '+val));
subject.next(1);
subject.next(2);
subject.complete();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'observer-comp';
}
