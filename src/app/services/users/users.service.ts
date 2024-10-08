import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Users } from '../../models/users';
import { Categories } from '../../models/categories';
import { map, Observable, of, switchMap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userCollection: AngularFirestoreCollection<Users>

  constructor(private afStore: AngularFirestore, private afAuth: AngularFireAuth) {
    this.userCollection = this.afStore.collection('users');
  }

  async newUser(users: Users) {
    const defaultUserCategory = {
      categoryName: 'Informatique',
      categoryDesc: "Comprendre l'informatique dans sa globalité",
      categoryColor: '#f9f578'
    }
    const userDoc = this.userCollection.doc(users.id)
    userDoc.collection('defaultCategory').add(defaultUserCategory)
    return await userDoc.set(users)
  }

  addUserChossenCategories(userID: string, category: Categories): Promise<void> {
    const userDoc = this.userCollection.doc(userID)
    return userDoc.collection('defaultCategory').doc(category.id).set(category)

  }

  getUser = (userId?: string) => this.userCollection.doc(userId).valueChanges()
 

  getUserByEmail(email: string): Observable<any> {
    return this.afStore.collection('users', ref => ref.where('email', '==', email)).snapshotChanges().pipe(
      map(actions => {
        if (actions.length > 0) {
          const data = actions[0].payload.doc.data();
          const id = actions[0].payload.doc.id;
          return { data, id };
        } else {
          return null;
        }
      })
    );
  }

  updateUserProfilImg(urlImg: string, userID?: string): Promise<void> {
    const userDoc = this.userCollection.doc(userID);
    return userDoc.get().toPromise().then((docSnapshot) => {
      if (docSnapshot?.exists) {
        return userDoc.update({ profilImg: urlImg });
      } else {
        throw new Error("User does not exist");
      }
    });
  }

  updateUserCoverImg(urlImg: string, userID?: string): Promise<void> {
    const userDoc = this.userCollection.doc(userID);
    return userDoc.get().toPromise().then((docSnapshot) => {
      if (docSnapshot?.exists) {
        return userDoc.update({ coverImg: urlImg });
      } else {
        throw new Error("User does not exist");
      }
    });
  }

}
