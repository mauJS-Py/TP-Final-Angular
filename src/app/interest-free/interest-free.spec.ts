import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestFree } from './interest-free';

describe('InterestFree', () => {
  let component: InterestFree;
  let fixture: ComponentFixture<InterestFree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestFree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestFree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
