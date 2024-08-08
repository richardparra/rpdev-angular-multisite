import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwwLayoutComponent } from './www-layout.component';

describe('WwwLayoutComponent', () => {
  let component: WwwLayoutComponent;
  let fixture: ComponentFixture<WwwLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WwwLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwwLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
