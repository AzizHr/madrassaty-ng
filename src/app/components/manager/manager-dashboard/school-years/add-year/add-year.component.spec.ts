import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYearComponent } from './add-year.component';

describe('AddYearComponent', () => {
  let component: AddYearComponent;
  let fixture: ComponentFixture<AddYearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddYearComponent]
    });
    fixture = TestBed.createComponent(AddYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
