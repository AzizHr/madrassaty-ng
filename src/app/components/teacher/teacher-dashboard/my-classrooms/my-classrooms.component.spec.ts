import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClassroomsComponent } from './my-classrooms.component';

describe('MyClassroomsComponent', () => {
  let component: MyClassroomsComponent;
  let fixture: ComponentFixture<MyClassroomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyClassroomsComponent]
    });
    fixture = TestBed.createComponent(MyClassroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
