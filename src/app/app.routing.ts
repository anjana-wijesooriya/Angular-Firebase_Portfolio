import { RouterModule, Route } from '@angular/router';
import { LayoutComponent } from './components/_layout/layout.component';
import { AboutComponent } from './components/about/about.component';
import { SummeryComponent } from './components/summery/summery.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AwardsComponent } from './components/awards/awards.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';

const appRoutes: Route[] = [
    // App Routes goes here
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: SummeryComponent, pathMatch: 'full', data: { animation: 'SummeryPage'} },
            { path: 'about', component: AboutComponent, data: { animation: 'AboutPage'} },
            { path: 'experience', component: ExperienceComponent, data: { animation: 'ExperiencePage'} },
            { path: 'projects', component: ProjectsComponent, data: { animation: 'ProjectsPage'} },
            { path: 'skills', component: SkillsComponent, data: { animation: 'SkillsPage'} },
            { path: 'awards', component: AwardsComponent , data: { animation: 'AwardsPage'}},
            { path: 'education', component: EducationComponent, data: { animation: 'EducationPage'} },
            { path: 'contact', component: ContactComponent , data: { animation: 'ContactPage'}}
        ]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
export const routing = RouterModule.forRoot(appRoutes);
