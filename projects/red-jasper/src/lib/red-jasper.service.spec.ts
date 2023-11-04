import { TestBed } from '@angular/core/testing';

import { RedJasperService } from './red-jasper.service';

describe('RedJasperService', () => {
  let service: RedJasperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedJasperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
