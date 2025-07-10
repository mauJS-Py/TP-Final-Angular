import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDiscount } from './show-discount';

describe('ShowDiscount', () => {
  let component: ShowDiscount;
  let fixture: ComponentFixture<ShowDiscount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowDiscount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDiscount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
