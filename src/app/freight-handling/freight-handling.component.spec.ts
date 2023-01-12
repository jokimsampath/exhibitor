import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightHandlingComponent } from './freight-handling.component';

describe('FreightHandlingComponent', () => {
  let component: FreightHandlingComponent;
  let fixture: ComponentFixture<FreightHandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreightHandlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
