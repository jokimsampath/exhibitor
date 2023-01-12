import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerRequirementComponent } from './power-requirement.component';

describe('PowerrequirementComponent', () => {
  let component: PowerRequirementComponent;
  let fixture: ComponentFixture<PowerRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerRequirementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
