import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClassroomDetailsComponent } from './my-classroom-details.component';

describe('MyClassroomDetailsComponent', () => {
  let component: MyClassroomDetailsComponent;
  let fixture: ComponentFixture<MyClassroomDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyClassroomDetailsComponent]
    });
    fixture = TestBed.createComponent(MyClassroomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
