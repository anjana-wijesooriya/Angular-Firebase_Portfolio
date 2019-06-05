import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) {
  }

  GetProjects() {
    return this.httpClient.get<Project[]>('https://portfolio-anjana-wijesooriya.firebaseio.com/Projects.json');
  }
}
