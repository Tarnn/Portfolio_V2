import { SharedModule } from './common/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './pages/hero/hero.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { LeftNavComponent } from './pages/left-nav/left-nav.component';
import { RightNavComponent } from './pages/right-nav/right-nav.component';
import { StyleguideComponent } from './misc/styleguide/styleguide.component';
import { HomeComponent } from './pages/layout/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ContactComponent,
    ResumeComponent,
    LeftNavComponent,
    RightNavComponent,
    StyleguideComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
