import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormLagComponent } from './form-lag/form-lag.component';
import { ReactiFormComponent } from './reacti-form/reacti-form.component';
import { BuildCompComponent } from './build-comp/build-comp.component';
import { TempFormComponent } from './temp-form/temp-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    FormLagComponent,
    ReactiFormComponent,
    BuildCompComponent,
    TempFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
