import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LangdingPageComponent } from './pages/langding-page/langding-page.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ConnexionComponent } from './pages/auth/connexion/connexion.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'LandingPage',
    pathMatch: 'full'
  },
  {
    path: 'LandingPage',
    component: LangdingPageComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path: 'connexion',
    component:ConnexionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
