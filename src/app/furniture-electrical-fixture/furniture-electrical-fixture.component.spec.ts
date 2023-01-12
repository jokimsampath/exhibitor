import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureElectricalFixtureComponent } from './furniture-electrical-fixture.component';

describe('FurnitureElectricalFixtureComponent', () => {
  let component: FurnitureElectricalFixtureComponent;
  let fixture: ComponentFixture<FurnitureElectricalFixtureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnitureElectricalFixtureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureElectricalFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
