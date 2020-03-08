import { TestBed } from '@angular/core/testing';

import { Env1Service } from './env1.service';

describe('Env1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Env1Service = TestBed.get(Env1Service);
    expect(service).toBeTruthy();
  });
});
