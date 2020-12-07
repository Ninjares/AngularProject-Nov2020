import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxCompleteComponent } from './tx-complete.component';

describe('TxCompleteComponent', () => {
  let component: TxCompleteComponent;
  let fixture: ComponentFixture<TxCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
