import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProjectsComponent } from './projects/projects.component';
import { SocialMediaComponent } from './social-media/social-media.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', component: MainComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'social', component: SocialMediaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
