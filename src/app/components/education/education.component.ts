import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education = [];
  constructor(private educationService: EducationService) { }

  ngOnInit() {
    this.GetEducation()
  }

  async GetEducation(){
    await this.educationService.GetEducation().subscribe(response => {
      window['education'] = Object.values(response);
      window['education'].forEach(element => {
        element.Content = Object.values(element.Content);
        this.education.push(element);
      });
      window['education'] = this.education;
    })
  }

}
