import { TestBed } from '@angular/core/testing';

import { PortInformationServiceService } from './port-information-service.service';

describe('PortInformationServiceService', () => {
  let service: PortInformationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortInformationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
