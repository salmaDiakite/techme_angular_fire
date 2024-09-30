import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvoidGuadService implements CanActivate{

  constructor(public afAuth: AngularFireAuth) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(((resolve =>{
      this.afAuth.authState.subscribe((res)=>{
        if(res){
          resolve(false);
        }else{
          resolve(true);
        }
      })
    })))
  }
}
