import { Component, OnInit, Input } from '@angular/core';

import './slide.js';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() calendar = [];
  startDay = moment().clone().startOf('month').startOf('week');
  endDay = moment().clone().endOf('month').endOf('week');
  @Input() currentMonthDates =
    new Array(moment().daysInMonth()).fill(null).map((x, i) => moment().startOf('month').add(i, 'days').toString());
  now = moment().format('LLLL');
  @Input() hours = [
    '9:00', '9:30',
    '10:00', '10:30',
    '11:00', '11:30',
    '13:00', '13:30',
    '14:00', '14:30',
    '15:00', '15:30',
    '16:00', '16:30',
    '17:00', '17:30',
    '18:00', '18:30'
  ];
  constructor() { }

  ngOnInit() {
    // console.log(moment('20120719', 'YYYYMMDD').fromNow());
    // console.log(moment().endOf('day').fromNow());
    // console.log(Object.entries(moment()));
    // const week = moment().get('week');
    // const month = moment().get('month');

    // console.log(`week ${week}`);
    // console.log(`month ${month}`);

    // console.log(typeof week);
    // const index = this.startDay.clone();
    // while (index.isBefore(this.endDay, 'day')) {
    //   this.calendar.push(
    //     new Array(7).fill(0).map(
    //       () => {
    //         return { date: index.add(1, 'day').date() };
    //       }
    //     )
    //   );
    // }
    // console.log(this.calendar);
    // console.log(`start day ${this.startDay} / end day ${this.endDay}`);

    // const daysInCurrentMonth = moment('2019-03', 'YYYYMM').daysInMonth();
    // const daysInCurrentMonth = moment('2019-03', 'YYYYMM').toArray();
    // const currentMoment = moment().toObject();
    // const weekday = moment().locale().
    // console.log(daysInCurrentMonth);
    // console.log(currentMoment);

    // console.log(this.currentMonthDates);
    // console.log(this.dayShort);
    // for (let i = 0; i <= this.currentMonthDates.length; i++) {
    //   this.dayShort = i;
    // }
  }

  viewDay(index: number) {
    console.log('open day view ' + index);
    console.log(this.now);
  }

}
