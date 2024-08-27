import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageWhastappComponent } from './message-whastapp.component';

describe('MessageWhastappComponent', () => {
  let component: MessageWhastappComponent;
  let fixture: ComponentFixture<MessageWhastappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageWhastappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageWhastappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
