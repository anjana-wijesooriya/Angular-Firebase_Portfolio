import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SummeryQoute } from 'src/app/models/qoute.model';
import { SummeryService } from 'src/app/services/summery.service';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.scss']
})
export class SummeryComponent implements OnInit {
  qouteList; book;
  activatedQoute: any;
  books: Book[];

  constructor(private firebaseService: FirebaseService, private summeryService: SummeryService) { }

  ngOnInit() {
    // this.AddNewQoute();
    // this.GetSummeryQoutesList();
    this.GetSummeryQouteById();
    // this.AddNewBook();
    // this.GetBooks();
    // this.book = this.GetBook();
    // console.log(this.book);
    // this.GetBookById();
  }

  GetSummeryQoutesList() {
    this.summeryService.GetSummeryQoutesList().subscribe(res => {
      this.qouteList =  res.map(e => {
        return {
          id: e.payload.doc.id,
          qoute: e.payload.doc.data()['qoute'],
          isActive: e.payload.doc.data()['isActive'],
          createdDate: e.payload.doc.data()['createdDate'],
          htmlCode: e.payload.doc.data()['htmlCode'],
        };
      });
      console.log(this.qouteList);
    });
  }

  GetSummeryQouteById() {
    this.activatedQoute = this.summeryService.GetSummeryQouteById(false).subscribe(res => {
      this.activatedQoute =  res[0]['htmlCode'];
      window['Activatedqoute'] = res;
      console.log(this.activatedQoute);
    });
    console.log(this.activatedQoute);
  }

  AddNewQoute() {
    const qoutes: SummeryQoute = {
      id: '',
      qoute: 'Qoute 1',
      createdDate: new Date(),
      isActive: true,
      htmlCode: document.getElementsByClassName('container')[0].innerHTML
    };

    let sums = this.summeryService.AddSummeryQoute(qoutes)
    .then(res => {
      console.log(res);
      this.GetSummeryQoutesList();
    }).catch(error =>{
      console.log(error);
    });
    console.log(sums);
  }

  GetBooks() {
    let x = this.firebaseService.GetBooks();
    x.snapshotChanges().subscribe(res => {
      this.books = [];
      window['books'] = [];
      res.forEach(book => {
        let y = book.payload.toJSON();
        y['$key'] = book.key;
        this.books.push(y as Book);
        window['books'].push(y);
      });
    });
  }

  GetBookById() {
    let x = this.firebaseService.GetBookById('-LbvqRzWLmjuTFsPaGB0')
    x.snapshotChanges().subscribe(res => {
      window['BookById'] = {};
      let y = res.payload.toJSON();
      y['$key'] = res.key;
      window['BookById'] = y;
    });

  }

  GetBook() {
    let x = this.books.filter(res => res.version == 5 )[0];
    window['BookRef'] = x;
  }

  AddNewBook() {
    const book: Book = {
      $key: '',
      bookName: 'Megadeath',
      version: 9
    }
    this.firebaseService.AddNewBook(book);
  }

  // AddBook(): void {
  //   this.firebaseService.addNewBook().then(data => {
  //     this.firebaseService.getBooks().subscribe( books => {
  //       books.map( e => {
  //         console.log({
  //           id: e.payload.doc.id,
  //           data: e.payload.doc.data()
  //         });
  //       });
  //     });
  //   });
  // }
}
