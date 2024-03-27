import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnayliticsComponent } from './data-anaylitics.component';

describe('DataAnayliticsComponent', () => {
  let component: DataAnayliticsComponent;
  let fixture: ComponentFixture<DataAnayliticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataAnayliticsComponent]
    });
    fixture = TestBed.createComponent(DataAnayliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
