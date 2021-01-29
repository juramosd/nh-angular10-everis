import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCountSelectedComponent } from './book-count-selected.component';

describe('BookCountSelectedComponent', () => {
  let component: BookCountSelectedComponent;
  let fixture: ComponentFixture<BookCountSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCountSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCountSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
