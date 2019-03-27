import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import * as moment from 'moment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-current-day',
  templateUrl: './current-day.component.html',
  styleUrls: ['./current-day.component.css']
})
export class CurrentDayComponent implements OnInit {
  @Input() current = moment().toString();
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

  constructor(private renderer: Renderer2) { }

  ngOnInit() {}

  onSubmit() {
    const compound = this.resForm.value.day.slice(0, 3) + this.resForm.value.stylist + this.resForm.value.time;
    const jackieChildren = this.jackie.nativeElement.children;
    const jillChildren = this.jill.nativeElement.children;
    const johnChildren = this.john.nativeElement.children;
    const jackieMatch = jackieChildren.namedItem(compound);
    const jillMatch = jillChildren.namedItem(compound);
    const johnMatch = johnChildren.namedItem(compound);
    const email = this.resForm.value.email;

    if (jackieMatch !== null && jackieMatch.id === compound) {
      const p = this.renderer.createElement('button');
      this.renderer.addClass(p, 'btn');
      this.renderer.addClass(p, 'btn-danger');
      this.renderer.addClass(p, 'btn-sm');
      this.renderer.setAttribute(p, 'title', 'push to remove');
      this.renderer.listen(p, 'click', () => {
        const confirm = prompt('To remove, enter the registered email');
        if (confirm !== null && confirm === email) {
          this.renderer.removeChild(jackieMatch, p);
        } else {
          alert('The email does not match! Please try again.');
        }
      });
      const clientName = this.renderer.createText(this.resForm.value.name);
      this.renderer.appendChild(p, clientName);
      this.renderer.appendChild(jackieMatch, p);
      this.resForm.reset();
      return;
    }
    if (jillMatch !== null && jillMatch.id === compound) {
      const p = this.renderer.createElement('button');
      this.renderer.addClass(p, 'btn');
      this.renderer.addClass(p, 'btn-danger');
      this.renderer.addClass(p, 'btn-sm');
      this.renderer.setAttribute(p, 'title', 'push to remove');
      this.renderer.listen(p, 'click', () => {
        const confirm = prompt('To remove, enter the registered email');
        if (confirm !== null && confirm === email) {
          this.renderer.removeChild(jillMatch, p);
        } else {
          alert('The email does not match! Please try again.');
        }
      });
      const clientName = this.renderer.createText(this.resForm.value.name);
      this.renderer.appendChild(p, clientName);
      this.renderer.appendChild(jillMatch, p);
      this.resForm.reset();
      return;
    }
    if (johnMatch !== null && johnMatch.id === compound) {
      const p = this.renderer.createElement('button');
      this.renderer.addClass(p, 'btn');
      this.renderer.addClass(p, 'btn-danger');
      this.renderer.addClass(p, 'btn-sm');
      this.renderer.setAttribute(p, 'title', 'push to remove');
      this.renderer.listen(p, 'click', () => {
        const confirm = prompt('To remove, enter the registered email');
        if (confirm !== null && confirm === email) {
          this.renderer.removeChild(johnMatch, p);
        } else {
          alert('The email does not match! Please try again.');
        }
      });
      const clientName = this.renderer.createText(this.resForm.value.name);
      this.renderer.appendChild(p, clientName);
      this.renderer.appendChild(johnMatch, p);
      this.resForm.reset();
      return;
    }
  }
}
