import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book';
import { BookMockService } from '../../services/book/book-mock.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  
  @Input() isFeatured: boolean = false;
  books: Book[];
  constructor(
    private bookService: BookMockService
  ) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void{     
    this.books = this.isFeatured ? this.bookService.getFeaturedBooks(): this.bookService.getBooks();
  }
}
