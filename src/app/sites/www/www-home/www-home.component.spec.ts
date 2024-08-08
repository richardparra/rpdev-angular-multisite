import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwwHomeComponent } from './www-home.component';

describe('WwwHomeComponent', () => {
  let component: WwwHomeComponent;
  let fixture: ComponentFixture<WwwHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WwwHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwwHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
