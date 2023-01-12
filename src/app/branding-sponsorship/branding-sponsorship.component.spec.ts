import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingSponsorshipComponent } from './branding-sponsorship.component';

describe('BrandingSponsorshipComponent', () => {
  let component: BrandingSponsorshipComponent;
  let fixture: ComponentFixture<BrandingSponsorshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandingSponsorshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandingSponsorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
