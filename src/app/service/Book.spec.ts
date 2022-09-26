import { TestBed } from '@angular/core/testing';

import { Book } from './Book';

describe('BookService', () => {
  let service: Book;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Book);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
