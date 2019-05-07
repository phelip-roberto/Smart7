import { TestBed } from '@angular/core/testing';

import { AppsManagerService } from './apps-manager.service';

describe('AppsManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppsManagerService = TestBed.get(AppsManagerService);
    expect(service).toBeTruthy();
  });
});
