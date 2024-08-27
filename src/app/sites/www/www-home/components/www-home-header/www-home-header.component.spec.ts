import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwwHomeHeaderComponent } from './www-home-header.component';

describe('WwwHomeHeaderComponent', () => {
  let component: WwwHomeHeaderComponent;
  let fixture: ComponentFixture<WwwHomeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WwwHomeHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwwHomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
