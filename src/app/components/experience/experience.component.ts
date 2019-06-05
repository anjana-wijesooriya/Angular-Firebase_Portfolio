import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience.service';
import { Experience } from 'src/app/models/experience.model';
import { HttpClient } from '@angular/common/http';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  careers: Experience[] = [];

  constructor(private experienceService: ExperienceService, private  httpClient: HttpClient) { }

  ngOnInit() {
    this.GetCareerExperience();
  }

  async GetCareerExperience() {
    // const experience = await this.experienceService.GetCareerExperience();
    // experience.snapshotChanges().subscribe(res => {
    //   res.forEach(element => {
    //     let c = element.payload.toJSON() as Experience;
    //     c['$key'] = element.key;
    //     this.careers.push(c);
    //     window['careers'] = c.Responsibilities;
    //   });
    // });

    await this.experienceService.GetCareerExperience().subscribe(res => {
      this.careers = Object.values(res);
    });

    // this.httpClient.get<Experience[]>('https://portfolio-anjana-wijesooriya.firebaseio.com/Experience.json').subscribe(res => {
    //  this.careers = Object.values(res);

    // });
  }

}
