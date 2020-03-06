import { TestBed } from '@angular/core/testing';

import { FeatureShellLibraryService } from './feature-shell-library.service';

describe('FeatureShellLibraryService', () => {
  let service: FeatureShellLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureShellLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
