import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable()
export class FirebaseService {
  bookList: AngularFireList<any>;
  selectedBook: Book = new Book();

  constructor(private firebase: AngularFireDatabase) {
    this.GetBooks();
  }

  GetBooks() {
    this.bookList = this.firebase.list('Books');
    return this.bookList;
  }

  AddNewBook(book: Book){
    this.bookList.push({
      bookName: book.bookName,
      version: book.version
    });
  }

  UpdateBook(book: Book) {
    this.bookList.update(book.$key, {
      bookName: book.bookName,
      version: book.version
    });
  }

  DeleteBook($key: string) {
    this.bookList.remove($key);
  }

  GetBookById(key: string) {
    let y = this.firebase.object(`Books/${key}`);
    return y;
  }

  GetBookByRef() {
    let y = this.firebase.list('Books');
    return y;
  }

}
