import { Component, OnInit,Input, OnChanges } from '@angular/core';
import {IBook, IBookSelected} from './../book'

@Component({
  selector: 'app-book-count-selected',
  templateUrl: './book-count-selected.component.html',
  styleUrls: ['./book-count-selected.component.scss']
})
export class BookCountSelectedComponent implements OnInit, OnChanges {
  @Input() books: IBookSelected[];

  title: string;
  constructor() { 
    this.title = "Detalle :";
  }

  ngOnChanges(): void {
  }


  ngOnInit(): void {  
    this.fetchBooks(); 
  }

  fetchBooks(): void {
    
   

  }

}
