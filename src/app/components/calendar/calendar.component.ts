import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import * as moment from 'moment';
import { NgForm } from '@angular/forms';

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

  current = moment().toString();
  second = moment(this.current).add(1, 'd').toString();
  third = moment(this.current).add(2, 'd').toString();
  fourth = moment(this.current).add(3, 'd').toString();
  fifth = moment(this.current).add(4, 'd').toString();
  sixth = moment(this.current).add(5, 'd').toString();
  seventh = moment(this.current).add(6, 'd').toString();

  @ViewChild('reservationForm') resForm: NgForm;
  @ViewChild('jackie') jackie: ElementRef;
  @ViewChild('jill') jill: ElementRef;
  @ViewChild('john') john: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    console.log(this.current);
  }

  onSubmit() {
    const compound = this.resForm.value.day.slice(0, 3) + this.resForm.value.stylist + this.resForm.value.time;
    const jackieChildren = this.jackie.nativeElement.children;
    const jillChildren = this.jill.nativeElement.children;
    const johnChildren = this.john.nativeElement.children;
    const jackieMatch = jackieChildren.namedItem(compound);
    const jillMatch = jillChildren.namedItem(compound);
    const johnMatch = johnChildren.namedItem(compound);

    console.log(compound);

    if (jackieMatch !== null && jackieMatch.id === compound) {
      const p = this.renderer.createElement('p');
      this.renderer.addClass(p, 'alert-danger');
      const clientName = this.renderer.createText(this.resForm.value.name);
      this.renderer.appendChild(p, clientName);
      this.renderer.appendChild(jackieMatch, p);
      this.resForm.reset();
      return;
    }
    if (jillMatch !== null && jillMatch.id === compound) {
      const p = this.renderer.createElement('p');
      this.renderer.addClass(p, 'alert-danger');
      const clientName = this.renderer.createText(this.resForm.value.name);
      this.renderer.appendChild(p, clientName);
      this.renderer.appendChild(jillMatch, p);
      this.resForm.reset();
      return;
    }
    if (johnMatch !== null && johnMatch.id === compound) {
      const p = this.renderer.createElement('p');
      this.renderer.addClass(p, 'alert-danger');
      const clientName = this.renderer.createText(this.resForm.value.name);
      this.renderer.appendChild(p, clientName);
      this.renderer.appendChild(johnMatch, p);
      this.resForm.reset();
      return;
    }
  }
}
