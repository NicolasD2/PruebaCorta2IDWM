import { TestBed } from '@angular/core/testing';

import { RickandMortyService } from './rickand-morty.service';

describe('RickandMortyService', () => {
  let service: RickandMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickandMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
