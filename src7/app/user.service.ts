import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(){
    return[{id:1,name:'John Doe'}, {id:2,name:'Jane Smith'}, {id:3,name:'Alice Johnson'}];
  }
}
