import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: boolean = false

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  registerUser(email: string, password: string){
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  //Methode permettant a l'utilisateur de se connecter
  loginUser(email: string, password: string){
    this.isLogged = true
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  //methode permettant a l'utilisateur de se deconnecter
  logoutUser(){
    this.afAuth.signOut();
  }
  
  //Methode permettant a l'utilisateur de modifier son mot de passe
  updatePassword(email: string){
    return this.afAuth.sendPasswordResetEmail(email);
  }

  isAuthenticated() {
    return this.isLogged
  }

  
}
