import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import * as $ from 'jquery';
// import * as moment from 'moment';

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AppRoutingModule } from './app-routing.module';
import { CurrentDayComponent } from './components/days/current-day/current-day.component';
import { SecondDayComponent } from './components/days/second-day/second-day.component';
import { ThirdDayComponent } from './components/days/third-day/third-day.component';
import { FourthDayComponent } from './components/days/fourth-day/fourth-day.component';
import { FifthDayComponent } from './components/days/fifth-day/fifth-day.component';
import { SixthDayComponent } from './components/days/sixth-day/sixth-day.component';
import { SeventhDayComponent } from './components/days/seventh-day/seventh-day.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CurrentDayComponent,
    SecondDayComponent,
    ThirdDayComponent,
    FourthDayComponent,
    FifthDayComponent,
    SixthDayComponent,
    SeventhDayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
