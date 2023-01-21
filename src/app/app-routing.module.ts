import { ResumeComponent } from './pages/resume/resume.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'home' },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'about' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'contact' },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { animation: 'projects' },
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: { animation: 'blog' },
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
