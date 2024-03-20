import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDashboardComponent } from './m-dashboard.component';

describe('MDashboardComponent', () => {
  let component: MDashboardComponent;
  let fixture: ComponentFixture<MDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MDashboardComponent]
    });
    fixture = TestBed.createComponent(MDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
