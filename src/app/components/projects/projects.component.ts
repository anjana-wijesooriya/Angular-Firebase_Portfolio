import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  items: number[] = [1, 2, 3, 4, 5, 6, 7];
  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.GetProjects();
  }

  async GetProjects() {
    await this.projectService.GetProjects().subscribe(response => {
      this.projects = Object.values(response);
      window['project'] = this.projects;
    })
            // .then(response => {
            //   this.projects = Object.values(response);
            //   window['project'] = this.projects;
            // })
            // .catch(error => console.log(error));
  }
}
