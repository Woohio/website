import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSidebarComponent } from './service-sidebar.component';

describe('ServiceSidebarComponent', () => {
  let component: ServiceSidebarComponent;
  let fixture: ComponentFixture<ServiceSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceSidebarComponent]
    });
    fixture = TestBed.createComponent(ServiceSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
