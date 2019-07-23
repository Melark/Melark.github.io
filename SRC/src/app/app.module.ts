import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './layout/header/header.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { ProfilePictureComponent } from './layout/profile-picture/profile-picture.component';
import { ProfileCardComponent } from './layout/profile-card/profile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProjectsComponent,
    HeaderComponent,
    SocialMediaComponent,
    ProfilePictureComponent,
    ProfileCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
