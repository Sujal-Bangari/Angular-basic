import { Component } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reacti-form',
  templateUrl: './reacti-form.component.html',
  styleUrls: ['./reacti-form.component.css']
})
export class ReactiFormComponent {

  forbiddenNameValiator(control: AbstractControl ){
    return control.value==='admin'?{
      forbiddenName: true
    }:null;
  }

  constructor(private fb:FormBuilder){}
  form=this.fb.group({
    username:['', [Validators.required, this.forbiddenNameValiator]],
    password:['']
  });


  onSubmit(){
    console.log(this.form.value);
  }
