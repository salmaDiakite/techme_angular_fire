import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private as : AuthService,public afAuth: AngularFireAuth) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(((resolve =>{
      this.afAuth.authState.subscribe((res)=>{
        if(res){
          resolve(true);
        }else{
          resolve(false);
        }
      })
    })))
  }
}
