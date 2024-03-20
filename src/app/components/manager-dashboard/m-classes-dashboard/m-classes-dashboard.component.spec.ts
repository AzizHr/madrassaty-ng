import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MClassesDashboardComponent } from './m-classes-dashboard.component';

describe('MClassesDashboardComponent', () => {
  let component: MClassesDashboardComponent;
  let fixture: ComponentFixture<MClassesDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MClassesDashboardComponent]
    });
    fixture = TestBed.createComponent(MClassesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
