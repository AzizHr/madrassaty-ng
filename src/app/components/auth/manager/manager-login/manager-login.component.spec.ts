import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerLoginComponent } from './manager-login.component';

describe('ManagerLoginComponent', () => {
  let component: ManagerLoginComponent;
  let fixture: ComponentFixture<ManagerLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerLoginComponent]
    });
    fixture = TestBed.createComponent(ManagerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
