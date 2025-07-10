import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAmMarmolSection } from './logo-am-marmol-section';

describe('LogoAmMarmolSection', () => {
  let component: LogoAmMarmolSection;
  let fixture: ComponentFixture<LogoAmMarmolSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoAmMarmolSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoAmMarmolSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
