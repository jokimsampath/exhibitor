import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipBadgeComponent } from './vip-badge.component';

describe('VipBadgeComponent', () => {
  let component: VipBadgeComponent;
  let fixture: ComponentFixture<VipBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
