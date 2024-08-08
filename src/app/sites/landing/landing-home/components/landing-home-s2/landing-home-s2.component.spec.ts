import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHomeS2Component } from './landing-home-s2.component';

describe('LandingHomeS2Component', () => {
  let component: LandingHomeS2Component;
  let fixture: ComponentFixture<LandingHomeS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingHomeS2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingHomeS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
