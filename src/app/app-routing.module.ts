import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LangdingPageComponent } from './pages/langding-page/langding-page.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ConnexionComponent } from './pages/auth/connexion/connexion.component';
import { AccueilComponent } from './pages/social/accueil/accueil.component';
import { ForgetPasswordComponent } from './pages/auth/forget-password/forget-password.component';
import { EmailVerificationComponent } from './pages/auth/email-verification/email-verification.component';
import { FirebaseResolverService } from './services/auth/firebase-resolver.service';

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
  {
    path:'accueil',
    component:AccueilComponent
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent
  },
  {
    path: 'email-verification',
    component: EmailVerificationComponent,
    resolve : {user: FirebaseResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
