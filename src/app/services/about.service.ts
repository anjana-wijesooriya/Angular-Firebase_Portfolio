import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Pair } from '../models/pair.model';
import { About } from '../models/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  aboutRef: AngularFireObject<About>;

  constructor(private firebaseDb: AngularFireDatabase) {
    window['firebasedb'] = firebaseDb;
  }

  GetAboutData(): AngularFireObject<About> {
    this.aboutRef = this.firebaseDb.object('About');
    return this.aboutRef;
  }

  async GetAboutVision(): Promise<AngularFireList<Pair[]>> {
    return await this.firebaseDb.list('About/Vision');
  }

  async GetAboutStory(): Promise<AngularFireList<Pair[]>> {
    return await this.firebaseDb.list('About/Story');
  }

  async GetAboutCurrentFocus(): Promise<AngularFireList<Pair[]>> {
    return await this.firebaseDb.list('About/CurrentFocus');
  }

  async GetFrontendHeader(): Promise<AngularFireList<Pair[]>> {
    return await this.firebaseDb.list('About/Frontend/Header');
  }

  async GetFrontendExperience(): Promise<AngularFireList<Pair>> {
    return await this.firebaseDb.list('About/Frontend/Experience');
  }

  async GetBackendHeader(): Promise<AngularFireList<Pair>> {
    return await this.firebaseDb.list('About/Backend/Header');
  }

  async GetBackendExperience(): Promise<AngularFireList<Pair>> {
    return await this.firebaseDb.list('About/Backend/Experience');
  }

}
