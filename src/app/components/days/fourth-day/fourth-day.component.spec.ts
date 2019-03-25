import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthDayComponent } from './fourth-day.component';

describe('FourthDayComponent', () => {
  let component: FourthDayComponent;
  let fixture: ComponentFixture<FourthDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
