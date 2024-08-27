import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwwLayoutHeaderComponent } from './www-layout-header.component';

describe('WwwLayoutHeaderComponent', () => {
  let component: WwwLayoutHeaderComponent;
  let fixture: ComponentFixture<WwwLayoutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WwwLayoutHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwwLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
