import { TestBed } from '@angular/core/testing';

import { StarwarsJediService } from './starwars-jedi.service';

describe('StarwarsJediService', () => {
  let service: StarwarsJediService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarwarsJediService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
