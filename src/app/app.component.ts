import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenUsernameValidator } from './custom-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-project';
  form: FormGroup;
username: any;
  constructor(private fb:FormBuilder){
    this.form=this.fb.group({
      username:['',[Validators.required, forbiddenUsernameValidator('admin')]]
    });
  }
  onSubmit(){
    if(this.form.valid){
      console.log('Form Submitted', this.form.value);
    }
    else{
      console.log("Check your username");
    }
  }
  getusername(){
    return this.form.get('username');
  }

}
