import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ButtonClickerComponent } from './button-clicker/button-clicker.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { LoggerComponent } from './logger/logger.component';
import { StyledCardComponent } from './styled-card/styled-card.component';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { TextColorDirective } from './text-color.directive';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    HelloWorldComponent,
    ButtonClickerComponent,
    DashboardComponent,
    DashboardCardComponent,
    ProfileComponent,
    SearchBoxComponent,
    LoggerComponent,
    StyledCardComponent,
    SenderComponent,
    ReceiverComponent,
    TextColorDirective,
    HoverHighlightDirective,
    UnlessDirective,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
