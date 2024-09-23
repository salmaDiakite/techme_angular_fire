import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { filter, Observable, take } from 'rxjs';
import { Users } from '../../models/users';
import { Resolve } from '@angular/router';

type FirebaseUser = Users;
@Injectable({
  providedIn: 'root'
})
export class FirebaseResolverService implements Resolve<Observable<FirebaseUser>> {

  constructor(private afAuth : AngularFireAuth) { }
  resolve(): any{
    return this.afAuth.user.pipe(
      filter((user: any) => user !== undefined),
      take(1)
    )
  }
}
