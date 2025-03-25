import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  onRegister(form:any){
    if(form.valid){
      console.log('User Registration', form.value);
    }
  }
}
