import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Experience } from '../models/experience.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private firebaseDb: AngularFireDatabase, private httpClient: HttpClient) {
  }

  GetCareerExperience(){
    // return await this.firebaseDb.list('Experience');
     return this.httpClient.get<Experience[]>('https://portfolio-anjana-wijesooriya.firebaseio.com/Experience.json');
  }
}
