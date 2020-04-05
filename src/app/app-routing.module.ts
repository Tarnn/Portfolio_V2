import { ResumeComponent } from './pages/resume/resume.component';
import { HomeComponent } from './pages/layout/home/home.component';
import { AppComponent } from './app.component';
import { StyleguideComponent } from './misc/styleguide/styleguide.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes =
  [
    {
      path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
      path: 'home', component: HomeComponent
    },
    {
      path: 'styleguide', component: StyleguideComponent
    },
    {
      path: 'resume', component: ResumeComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
