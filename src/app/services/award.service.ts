import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Award } from '../models/award.model';

@Injectable({
  providedIn: 'root'
})
export class AwardService {

  constructor(private httpClient: HttpClient) { }

  GetAwards(){
    return this.httpClient.get<Award[]>('https://portfolio-anjana-wijesooriya.firebaseio.com/Awards.json');
  }
}
