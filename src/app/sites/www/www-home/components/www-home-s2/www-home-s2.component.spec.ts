import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwwHomeS2Component } from './www-home-s2.component';

describe('WwwHomeS2Component', () => {
  let component: WwwHomeS2Component;
  let fixture: ComponentFixture<WwwHomeS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WwwHomeS2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwwHomeS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
