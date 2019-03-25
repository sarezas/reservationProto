import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthDayComponent } from './fifth-day.component';

describe('FifthDayComponent', () => {
  let component: FifthDayComponent;
  let fixture: ComponentFixture<FifthDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
