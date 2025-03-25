import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  task:any;
  constructor(protected taskService:TaskService){}
  addTask(){
    if(this.task){
      this.taskService.addTasks(this.task);
      this.task='';
    }
  }

}
