import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwwHomeS1Component } from './www-home-s1.component';

describe('WwwHomeS1Component', () => {
  let component: WwwHomeS1Component;
  let fixture: ComponentFixture<WwwHomeS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WwwHomeS1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwwHomeS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
