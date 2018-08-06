import { TestBed, inject } from '@angular/core/testing';

import { NewsServiceService } from './newService.service';

describe('NewsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsServiceService]
    });
  });

  it('should be created', inject([NewsServiceService], (service: NewsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
