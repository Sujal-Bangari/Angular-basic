import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks:string[]=[];
  constructor() { }
  getTasks():string[]{
    return this.tasks;
  }
  addTasks(task:string){
    this.tasks.push(task);
  }
  deleteTask(index:number){
    this.tasks.splice(index,1);
  }
}
