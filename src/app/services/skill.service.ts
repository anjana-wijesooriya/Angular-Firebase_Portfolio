import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private httpClient: HttpClient) { }

  GetSkills(){
    return this.httpClient.get('https://portfolio-anjana-wijesooriya.firebaseio.com/Skills.json');
  }
}
