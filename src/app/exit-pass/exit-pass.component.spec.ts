import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitPassComponent } from './exit-pass.component';

describe('ExitPassComponent', () => {
  let component: ExitPassComponent;
  let fixture: ComponentFixture<ExitPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
