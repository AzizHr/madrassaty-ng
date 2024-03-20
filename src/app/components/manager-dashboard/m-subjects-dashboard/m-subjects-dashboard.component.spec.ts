import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSubjectsDashboardComponent } from './m-subjects-dashboard.component';

describe('MSubjectsDashboardComponent', () => {
  let component: MSubjectsDashboardComponent;
  let fixture: ComponentFixture<MSubjectsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MSubjectsDashboardComponent]
    });
    fixture = TestBed.createComponent(MSubjectsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
