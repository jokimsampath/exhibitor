import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StallDesignsComponent } from './stall-designs.component';

describe('StallDesignsComponent', () => {
  let component: StallDesignsComponent;
  let fixture: ComponentFixture<StallDesignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StallDesignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StallDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
