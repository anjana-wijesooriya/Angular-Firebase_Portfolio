import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import { Pair } from 'src/app/models/pair.model';
import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import { About } from 'src/app/models/about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutObj: AngularFireObject<any>;
  vision: Pair = new Pair();
  stories: Pair[] = [];
  currentFocus: Pair[] = [];
  frontendHeader: Pair[] = [];
  frontendExperience: Pair[] = [];
  backendExperience: Pair[] = [];
  backendHeader: Pair[] = [];
  constructor(private aboutService: AboutService) {
  }

  ngOnInit() {
    this.GetAboutVision();
    this.GetAboutStory();
    this.GetAboutCurrentFocus();
    this.GetFrontendHeader();
    this.GetFrontendExperience();
    this.GetBackendHeader();
    this.GetBackendExperience();
  }

  GetAboutData() {
    return this.aboutService.GetAboutData();
  }

  async GetAboutVision() {
    const vis: AngularFireList<Pair[]> = await this.aboutService.GetAboutVision();
    vis.snapshotChanges().subscribe(res => {
      res.forEach(element => {
        const x: Pair = element.payload.toJSON() as Pair;
        x['$key'] = element.key;
        if (x.IsActive) {
          this.vision = x;
        }
      });
    });
  }

  async GetAboutStory() {
    const story = await this.aboutService.GetAboutStory();
    story.snapshotChanges().subscribe(res => {
      res.forEach(element => {
        const s: Pair = element.payload.toJSON() as Pair;
        if (s.IsActive) {
          s.$key = element.key;
          this.stories.push(s);
        }
      });
    });
  }

  async GetAboutCurrentFocus() {
    const focus = await this.aboutService.GetAboutCurrentFocus();
    focus.snapshotChanges().subscribe(res => {
      res.forEach(element => {
        const f: Pair = element.payload.toJSON() as Pair;
        if (f.IsActive) {
          f.$key = element.key;
          this.currentFocus.push(f);
        }
      });
    });
  }

  async GetFrontendHeader() {
    const header = await this.aboutService.GetFrontendHeader();
    header.snapshotChanges().subscribe(res => {
      res.forEach(element => {
        const h: Pair = element.payload.toJSON() as Pair;
        if (h.IsActive) {
          h.$key = element.key;
          this.frontendHeader.push(h);
        }
      });
    });
  }

  async GetFrontendExperience() {
    const ex = await this.aboutService.GetFrontendExperience();
    ex.snapshotChanges().subscribe(res => {
      res.forEach(element => {
        const e: Pair = element.payload.toJSON() as Pair;
        if (e.IsActive) {
          e.$key = element.key;
          this.frontendExperience.push(e);
        }
      });
    });
  }

  async GetBackendHeader() {
    const header = await this.aboutService.GetBackendHeader();
    header.snapshotChanges().subscribe(res => {
      res.forEach(element => {
        const h: Pair = element.payload.toJSON() as Pair;
        if (h.IsActive) {
          h.$key = element.key;
          this.backendHeader.push(h);
        }
      });
    });
  }

  async GetBackendExperience() {
    const ex = await this.aboutService.GetBackendExperience();
    ex.snapshotChanges().subscribe(res => {
      res.forEach(element => {
        const e: Pair = element.payload.toJSON() as Pair;
        if (e.IsActive) {
          e.$key = element.key;
          this.backendExperience.push(e);
        }
      });
    });
  }

}
