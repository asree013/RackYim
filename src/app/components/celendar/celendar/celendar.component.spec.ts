import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelendarComponent } from './celendar.component';

describe('CelendarComponent', () => {
  let component: CelendarComponent;
  let fixture: ComponentFixture<CelendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
