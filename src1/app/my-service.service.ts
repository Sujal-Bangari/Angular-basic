import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  getMessage(){
    return "Hello from MyService";
  }
}
