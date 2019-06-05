import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './components/_layout/app-navbar/app-navbar.component';
import { AppHeaderComponent } from './components/_layout/app-header/app-header.component';
import { AppFooterComponent } from './components/_layout/app-footer/app-footer.component';
import { LayoutComponent } from './components/_layout/layout.component';
import { AboutComponent } from './components/about/about.component';

import { routing } from './app.routing';
import { SummeryComponent } from './components/summery/summery.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WebsiteComponent } from './components/projects/website/website.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AwardsComponent } from './components/awards/awards.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { environment } from 'src/environments/environment';
import { FirebaseService } from './services/firebase.service';
import { SummeryService } from './services/summery.service';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AboutService } from './services/about.service';
import { ExperienceService } from './services/experience.service';
import { HttpClientModule } from '@angular/common/http';
import { CareerComponent } from './components/experience/career/career.component';
import { ProjectService } from './services/project.service';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppHeaderComponent,
    AppFooterComponent,
    LayoutComponent,
    AboutComponent,
    SummeryComponent,
    ExperienceComponent,
    ProjectsComponent,
    WebsiteComponent,
    SkillsComponent,
    AwardsComponent,
    EducationComponent,
    ContactComponent,
    CareerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [
    FirebaseService,
    SummeryService,
    AboutService,
    ExperienceService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
