import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';
import { Pair } from 'src/app/models/pair.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = [];


  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.GetProjects();
  }

  async GetProjects() {
    await this.skillService.GetSkills().subscribe(response => {
      window['skills'] = Object.values(response);
      // window['skills'] = this.skills;
      window['skills'].forEach(element => {
        let keys = Object.keys(element);
        let obj = {};
        obj['Key'] = [keys[0]][0];
        obj['Values'] =  Object.values(element[keys[0]]);
        // obj[keys[0]] = Object.values(element[keys[0]]);
        this.skills.push(obj);
        // this.skills[keys[0]] = Object.values(element[keys[0]]);
        // this.skills.push(Object.values(element[keys[0]]));
      });
      window['aaa'] = this.skills;
    })
            // .then(response => {
            //   this.projects = Object.values(response);
            //   window['project'] = this.projects;
            // })
            // .catch(error => console.log(error));
  }

}
