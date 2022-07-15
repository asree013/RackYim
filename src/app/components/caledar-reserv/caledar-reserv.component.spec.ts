import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaledarReservComponent } from './caledar-reserv.component';

describe('CaledarReservComponent', () => {
  let component: CaledarReservComponent;
  let fixture: ComponentFixture<CaledarReservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaledarReservComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaledarReservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
