import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-lag',
  templateUrl: './form-lag.component.html',
  styleUrls: ['./form-lag.component.css']
})
export class FormLagComponent {
  onSubmit(form:NgForm){
    console.log(form.value);
  }
}
