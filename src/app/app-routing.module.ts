import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentDayComponent } from './components/days/current-day/current-day.component';
import { SecondDayComponent } from './components/days/second-day/second-day.component';
import { ThirdDayComponent } from './components/days/third-day/third-day.component';
import { FourthDayComponent } from './components/days/fourth-day/fourth-day.component';
import { FifthDayComponent } from './components/days/fifth-day/fifth-day.component';
import { SixthDayComponent } from './components/days/sixth-day/sixth-day.component';
import { SeventhDayComponent } from './components/days/seventh-day/seventh-day.component';

const routes: Routes = [
  { path: 'current', component: CurrentDayComponent },
  { path: 'second', component: SecondDayComponent },
  { path: 'third', component: ThirdDayComponent },
  { path: 'fourth', component: FourthDayComponent },
  { path: 'fifth', component: FifthDayComponent },
  { path: 'sixth', component: SixthDayComponent },
  { path: 'seventh', component: SeventhDayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

