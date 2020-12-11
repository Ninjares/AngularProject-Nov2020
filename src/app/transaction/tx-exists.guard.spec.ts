import { TestBed } from '@angular/core/testing';

import { TxExistsGuard } from './tx-exists.guard';

describe('TxExistsGuard', () => {
  let guard: TxExistsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TxExistsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
