import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BookExampleComponent } from './components/book-example/book-example.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BookListExampleComponent } from './components/book-list-example/book-list-example.component';
import { BookSelectCountComponent } from './components/book-select-count/book-select-count.component';
import { BookCountSelectedComponent } from './components/book-count-selected/book-count-selected.component';

import {CustomNamePipe} from './components/book-example/book-name.pipe';
import { PublisherPrettyPipe } from './component/book-example/publisher-pretty.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BookExampleComponent,
    HomePageComponent,
    BookListExampleComponent,
    BookSelectCountComponent,
    BookCountSelectedComponent,
    CustomNamePipe,
    PublisherPrettyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
