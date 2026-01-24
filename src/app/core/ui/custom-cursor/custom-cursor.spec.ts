import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCursorComponent } from './custom-cursor';

describe('CustomCursorComponent', () => {
  let component: CustomCursorComponent;
  let fixture: ComponentFixture<CustomCursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCursorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCursorComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});