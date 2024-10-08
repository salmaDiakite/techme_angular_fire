import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LangdingPageComponent } from './pages/langding-page/langding-page.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ConnexionComponent } from './pages/auth/connexion/connexion.component';
import { AccueilComponent } from './pages/social/accueil/accueil.component';
import { ForgetPasswordComponent } from './pages/auth/forget-password/forget-password.component';
import { EmailVerificationComponent } from './pages/auth/email-verification/email-verification.component';
import { FirebaseResolverService } from './services/auth/firebase-resolver.service';
import { TestComponent } from './pages/test/test.component';
import { EssaieTabsComponent } from './pages/essaie-tabs/essaie-tabs.component';
import { BusinessComponent } from './pages/social/business/business.component';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { AvoidGuadService } from './services/guard/avoid-guad.service';
import { ProfilComponent } from './pages/social/profil/profil.component';
import { CompleteProfileComponent } from './pages/social/complete-profile/complete-profile.component';

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
    component:RegisterComponent,
    canActivate: [AvoidGuadService]
  },
  {
    path: 'connexion',
    component:ConnexionComponent,
    canActivate: [AvoidGuadService]
  },
  {
    path:'accueil',
    component:AccueilComponent,
    resolve : {user: FirebaseResolverService},
    canActivate: [AuthGuardService]
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent
  },
  
  {
    path: 'email-verification',
    component: EmailVerificationComponent,
    resolve : {user: FirebaseResolverService}
  },
  {
    path: 'try',
    component: TestComponent
  },
  {
    path:'teachMe-business',
    component: BusinessComponent
  },
  {
    path: 'profil',
    component: ProfilComponent,
    resolve : {user: FirebaseResolverService},
    canActivate: [AuthGuardService]
  },
  {
    path:'complete-profil',
    component: CompleteProfileComponent,
    resolve : {user: FirebaseResolverService},
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
