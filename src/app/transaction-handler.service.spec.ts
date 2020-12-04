/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TransactionHandlerService } from './transaction-handler.service';

describe('TransactionHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionHandlerService]
    });
  });

  it('should ...', inject([TransactionHandlerService], (service: TransactionHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
