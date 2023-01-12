import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorshipOpportunitiesComponent } from './sponsorship-opportunities.component';

describe('SponsorshipOpportunitiesComponent', () => {
  let component: SponsorshipOpportunitiesComponent;
  let fixture: ComponentFixture<SponsorshipOpportunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorshipOpportunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorshipOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
