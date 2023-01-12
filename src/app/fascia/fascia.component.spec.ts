import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasciaComponent } from './fascia.component';

describe('FasciaComponent', () => {
  let component: FasciaComponent;
  let fixture: ComponentFixture<FasciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FasciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
