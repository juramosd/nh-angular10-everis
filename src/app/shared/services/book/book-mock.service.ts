import { Injectable } from '@angular/core';
import { Book } from '../../interfaces/book';
import { booksMock } from '../../mock/books.mock';

@Injectable({
  providedIn: 'root'
})
export class BookMockService {

  constructor() { }

  getBooks(): Book[]{
    return booksMock;
  }

  getFeaturedBooks(): Book[]{
    return booksMock.filter(f=>f.featured === true);
  }

  getBook(id:number): Book{
    return booksMock.find(f=>f.id===id);
  }
}
