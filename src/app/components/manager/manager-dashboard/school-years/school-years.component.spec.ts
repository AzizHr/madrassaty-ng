import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolYearsComponent } from './school-years.component';

describe('SchoolYearsComponent', () => {
  let component: SchoolYearsComponent;
  let fixture: ComponentFixture<SchoolYearsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolYearsComponent]
    });
    fixture = TestBed.createComponent(SchoolYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
