import { Component, OnInit } from '@angular/core';
import { IBook, IBookSelected } from '../book';
import { BookData } from './mock-data';

@Component({
  selector: 'app-book-list-example',
  templateUrl: './book-list-example.component.html',
  styleUrls: ['./book-list-example.component.scss']
})
export class BookListExampleComponent implements OnInit {

  books: IBook[];
  selectedBooks: IBook[];
  selectedBooksGroup: IBookSelected[];
  bookSelect: IBookSelected;
  constructor() { }

  ngOnInit(): void {
    this.books = this.fetchBook();
    this.selectedBooks = [];
    this.selectedBooksGroup = [];
  }

  fetchBook(): IBook[] {
    return BookData;
  }

  selectBook(book: IBook): void {
    this.selectedBooks.push(book);
    this.selectedBooksGroup = [];
  
      var counts = this.selectedBooks.reduce((p, c) => {
        var name = c.name;
        if (!p.hasOwnProperty(name)) {
          p[name] = 0;
        }
        p[name]++;
        return p;
      }, {});
      
      
      var countsExtended = Object.keys(counts).map(k => {
        return this.selectedBooksGroup.push({name: k, cantidad: counts[k]}); });
      

    }

}
