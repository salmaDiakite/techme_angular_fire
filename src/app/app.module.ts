import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LangdingPageComponent } from './pages/langding-page/langding-page.component';
import { MaterialUiModule } from './modules/material-ui/material-ui.module';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ConnexionComponent } from './pages/auth/connexion/connexion.component';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { AccueilComponent } from './pages/social/accueil/accueil.component';
import { ForgetPasswordComponent } from './pages/auth/forget-password/forget-password.component';
import { EmailVerificationComponent } from './pages/auth/email-verification/email-verification.component';
import { TestComponent } from './pages/test/test.component';
import { EssaieTabsComponent } from './pages/essaie-tabs/essaie-tabs.component';
@NgModule({
  declarations: [
    AppComponent,
    LangdingPageComponent,
    RegisterComponent,
    ConnexionComponent,
    AccueilComponent,
    ForgetPasswordComponent,
    EmailVerificationComponent,
    TestComponent,
    EssaieTabsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    MaterialUiModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
