import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthDayComponent } from './sixth-day.component';

describe('SixthDayComponent', () => {
  let component: SixthDayComponent;
  let fixture: ComponentFixture<SixthDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixthDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
