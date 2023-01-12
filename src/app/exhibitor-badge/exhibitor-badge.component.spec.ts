import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitorBadgeComponent } from './exhibitor-badge.component';

describe('ExhibitorBadgeComponent', () => {
  let component: ExhibitorBadgeComponent;
  let fixture: ComponentFixture<ExhibitorBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitorBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitorBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
