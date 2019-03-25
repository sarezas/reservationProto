import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';

// import './slide.js';
import * as moment from 'moment';
import { NgForm } from '@angular/forms';
import { clearResolutionOfComponentResourcesQueue } from '@angular/core/src/metadata/resource_loading';
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
  @ViewChild('reservationForm') resForm: NgForm;
  @ViewChild('jackie') jackie: ElementRef;
  @ViewChild('jill') jill: ElementRef;
  @ViewChild('john') john: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {}

  onSubmit() {
    const jackieChildren = this.jackie.nativeElement.children;
    const jillChildren = this.jill.nativeElement.children;
    const johnChildren = this.john.nativeElement.children;
    const compound = this.resForm.value.stylist + this.resForm.value.time;
    const jackieMatch = jackieChildren.namedItem(compound);
    const jillMatch = jillChildren.namedItem(compound);
    const johnMatch = johnChildren.namedItem(compound);
    console.log(jackieMatch);
    console.log(jillMatch);
    console.log(johnMatch);

    // switch (compound) {
    //   case (compound === jackieMatch.id):
    //     const p = this.renderer.createElement('p');
    //     const clientName = this.renderer.createText(this.resForm.value.name);
    //     this.renderer.appendChild(p, clientName);
    //     this.renderer.appendChild(jackieMatch, p);
    //     this.resForm.reset();
    //     break;
    //     console.log('aha!');
    //   case (compound === jillMatch.id):
    //     const par = this.renderer.createElement('p');
    //     const clientName2 = this.renderer.createText(this.resForm.value.name);
    //     this.renderer.appendChild(par, clientName2);
    //     this.renderer.appendChild(jillMatch, par);
    //     this.resForm.reset();
    //     break;
    //   case (compound === jackieMatch.id):
    //     const para = this.renderer.createElement('p');
    //     const clientName3 = this.renderer.createText(this.resForm.value.name);
    //     this.renderer.appendChild(para, clientName3);
    //     this.renderer.appendChild(jillMatch, para);
    //     this.resForm.reset();
    //     break;
    // }

    // // if (compound !== null) {
    //   if (compound === jackieMatch.id) {
    //     const p = this.renderer.createElement('p');
    //     const clientName = this.renderer.createText(this.resForm.value.name);
    //     this.renderer.appendChild(p, clientName);
    //     this.renderer.appendChild(jackieMatch, p);
    //     this.resForm.reset();
    //   } else if (compound === jillMatch.id) {
    //     const p = this.renderer.createElement('p');
    //     const clientName = this.renderer.createText(this.resForm.value.name);
    //     this.renderer.appendChild(p, clientName);
    //     this.renderer.appendChild(jillMatch, p);
    //     this.resForm.reset();
    //   } else if (compound === johnMatch.id) {
    //     const p = this.renderer.createElement('p');
    //     const clientName = this.renderer.createText(this.resForm.value.name);
    //     this.renderer.appendChild(p, clientName);
    //     this.renderer.appendChild(johnMatch, p);
    //     this.resForm.reset();
    //   }
    // }




    // if (compound === this.jackie.nativeElement.id) {
    //   const match = jackieChildren.namedItem(compound);
    //   const p = this.renderer.createElement('p');
    //   const clientName = this.renderer.createText(this.resForm.value.name);
    //   this.renderer.appendChild(p, clientName);
    //   this.renderer.appendChild(match, p);
    //   this.resForm.reset();
    // }


    // if (compound === this.jill.nativeElement.id) {
    //   const match = jillChildren.namedItem(compound);
    //   const p = this.renderer.createElement('p');
    //   const clientName = this.renderer.createText(this.resForm.value.name);
    //   this.renderer.appendChild(p, clientName);
    //   this.renderer.appendChild(match, p);
    //   this.resForm.reset();
    // }

    // if (compound === this.john.nativeElement.id) {
    //   const match = johnChildren.namedItem(compound);
    //   const p = this.renderer.createElement('p');
    //   const clientName = this.renderer.createText(this.resForm.value.name);
    //   this.renderer.appendChild(p, clientName);
    //   this.renderer.appendChild(match, p);
    //   this.resForm.reset();
    // }

  }
}
