import { TestBed } from '@angular/core/testing';

import { CalendarReserveService } from './calendar-reserve.service';

describe('CalendarReserveService', () => {
  let service: CalendarReserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarReserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
