import { Component, OnInit, Input } from '@angular/core';

// import './slide.js';
import * as moment from 'moment';
import { NgForm } from '@angular/forms';
// import { SchedulerModel } from '../../models/scheduler.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  now = new Date();
  @Input() year = moment(this.now).year();
  @Input() month = moment(this.now, 'MMMM').month().toString();
  @Input() monthName = moment(this.month, 'MM').add(1, 'month').format('MMMM');
  @Input() week = moment().week().toString();
  // current = moment().startOf('isoWeek').toString();
  // second = moment(this.current).startOf('isoWeek').weekday(2).toString();
  // third = moment(this.current).startOf('isoWeek').weekday(3).toString();
  // fourth = moment(this.current).startOf('isoWeek').weekday(4).toString();
  // fifth = moment(this.current).startOf('isoWeek').weekday(5).toString();
  // sixth = moment(this.current).startOf('isoWeek').weekday(6).toString();
  // seventh = moment(this.current).startOf('isoWeek').weekday(7).toString();
  current = moment().toString();
  second = moment(this.current).add(1, 'd').toString();
  third = moment(this.current).add(2, 'd').toString();
  fourth = moment(this.current).add(3, 'd').toString();
  fifth = moment(this.current).add(4, 'd').toString();
  sixth = moment(this.current).add(5, 'd').toString();
  seventh = moment(this.current).add(6, 'd').toString();

  @Input() weekDays = [this.current, this.second, this.third, this.fourth, this.fifth, this.sixth, this.seventh];
  // @Input() links = ['/current', '/second', '/third', '/fourth', '/fifth', '/sixth', '/seventh'];
  @Input() times: any = [
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30'
  ];
  // @Input() schedule = {
  //   year: this.year,
  //   month: this.monthName,
  //   stylists: {
  //     stylist1: {
  //       name: 'Jackie',
  //       times: this.times,
  //       clients: this.clients
  //     },
  //     stylist2: {
  //       name: 'Jill',
  //       times: this.times
  //     },
  //     stylist3: {
  //       name: 'John',
  //       times: this.times
  //     }
  //   }
  // };
  constructor() { }

  ngOnInit() {
    console.log(this.second);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
