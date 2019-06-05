import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private httpClient: HttpClient) { }

  GetEducation(){
    return this.httpClient.get('https://portfolio-anjana-wijesooriya.firebaseio.com/Education.json');
  }
}
