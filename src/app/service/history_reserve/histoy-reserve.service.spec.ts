import { TestBed } from '@angular/core/testing';

import { HistoyReserveService } from './histoy-reserve.service';

describe('HistoyReserveService', () => {
  let service: HistoyReserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoyReserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
