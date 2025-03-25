import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-build-comp',
  templateUrl: './build-comp.component.html',
  styleUrls: ['./build-comp.component.css']
})
export class BuildCompComponent {
  constructor(private fb:FormBuilder){}
  form=this.fb.group({
    firstName:['', Validators.required],
    lastName:['', Validators.required],
    email:['', Validators.required, Validators.email]
  });
  // onSubmit(){
  //   console.log(this.form.value);
  // }
}
