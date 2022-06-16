import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryReserveComponent } from './history-reserve.component';

describe('HistoryReserveComponent', () => {
  let component: HistoryReserveComponent;
  let fixture: ComponentFixture<HistoryReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryReserveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
