import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioManagementComponent } from './portfolio-management.component';

describe('PortfolioManagementComponent', () => {
  let component: PortfolioManagementComponent;
  let fixture: ComponentFixture<PortfolioManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioManagementComponent]
    });
    fixture = TestBed.createComponent(PortfolioManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
