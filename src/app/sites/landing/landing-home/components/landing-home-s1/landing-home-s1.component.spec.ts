import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHomeS1Component } from './landing-home-s1.component';

describe('LandingHomeS1Component', () => {
  let component: LandingHomeS1Component;
  let fixture: ComponentFixture<LandingHomeS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingHomeS1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingHomeS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
