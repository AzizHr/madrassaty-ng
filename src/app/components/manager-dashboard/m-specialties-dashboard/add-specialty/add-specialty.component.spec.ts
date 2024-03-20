import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecialtyComponent } from './add-specialty.component';

describe('AddSpecialtyComponent', () => {
  let component: AddSpecialtyComponent;
  let fixture: ComponentFixture<AddSpecialtyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSpecialtyComponent]
    });
    fixture = TestBed.createComponent(AddSpecialtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
