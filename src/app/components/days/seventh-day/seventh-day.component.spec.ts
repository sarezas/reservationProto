import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhDayComponent } from './seventh-day.component';

describe('SeventhDayComponent', () => {
  let component: SeventhDayComponent;
  let fixture: ComponentFixture<SeventhDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeventhDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventhDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
