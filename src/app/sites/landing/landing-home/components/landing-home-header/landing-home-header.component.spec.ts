import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHomeHeaderComponent } from './landing-home-header.component';

describe('LandingHomeHeaderComponent', () => {
  let component: LandingHomeHeaderComponent;
  let fixture: ComponentFixture<LandingHomeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingHomeHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingHomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
