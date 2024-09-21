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
    title: 'Brandon McCray',
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'about' },
    title: 'Brandon | About',
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'contact' },
    title: 'Brandon | Contact',
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { animation: 'projects' },
    title: 'Brandon | Projects',
  },
  // {
  //   path: 'blog',
  //   component: BlogComponent,
  //   data: { animation: 'blog' },
  //   title: 'Brandon | Blog',
  // },
  // {
  //   path: 'resume',
  //   component: ResumeComponent,
  //   title: 'Brandon | Resume',
  // },
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
