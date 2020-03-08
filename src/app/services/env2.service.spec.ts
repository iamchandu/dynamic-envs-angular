import { TestBed } from '@angular/core/testing';

import { Env2Service } from './env2.service';

describe('Env2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Env2Service = TestBed.get(Env2Service);
    expect(service).toBeTruthy();
  });
});
