import { TestBed, inject } from '@angular/core/testing';

import { KvkIdentityService } from './kvk-identity.service';

describe('KvkIdentityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KvkIdentityService]
    });
  });

  it('should be created', inject([KvkIdentityService], (service: KvkIdentityService) => {
    expect(service).toBeTruthy();
  }));
});
