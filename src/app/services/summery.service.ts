import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
// import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import { SummeryQoute } from '../models/qoute.model';
import { throwError, Observable } from 'rxjs';
// import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class SummeryService {
  _qoute: AngularFireObject<SummeryQoute>;
  _qoutes: AngularFireList<any>;
  qoutesRef: AngularFireList<any>;
  qouteRef: AngularFireObject<any>;

  constructor(private firestore: AngularFirestore, private db: AngularFireDatabase) {
  }

  // firestore
  AddSummeryQoute(data) {
    return this.firestore.collection('qoutes').add(data);
  }

  GetSummeryQoutesList() {
    return this.firestore.collection('qoutes').snapshotChanges();
  }

  UpdateSummeryQoute(recordId, record) {
    this.firestore.doc('qoutes/' + recordId).update(record);
  }

  DeletSummeryQoute(recordId) {
    this.firestore.doc('Students/' + recordId).delete();
  }

  GetSummeryQouteById(recordId){
    return this.firestore.collection('qoutes', ref => ref.where('isActive', '==', false)).valueChanges();
  }

  handleError(error) {
    let errorMsg = '';
    if (error.error instanceof ErrorEvent) {
      errorMsg = `Error: ${error.error.message}`;
    } else {
      errorMsg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMsg);
    return throwError(errorMsg);
  }
}
