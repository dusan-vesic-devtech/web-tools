import { TestBed, inject } from '@angular/core/testing';

import { Sha1Service } from './sha1.service';

describe('Sha1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Sha1Service]
    });
  });

  it('should be created', inject([Sha1Service], (service: Sha1Service) => {
    expect(service).toBeTruthy();
  }));
});
