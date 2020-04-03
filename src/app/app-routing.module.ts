import { HomeComponent } from './pages/layout/home/home.component';
import { AppComponent } from './app.component';
import { StyleguideComponent } from './misc/styleguide/styleguide.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes =
  [
    {
      path: 'home', component: HomeComponent
    },
    {
      path: 'styleguide', component: StyleguideComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
