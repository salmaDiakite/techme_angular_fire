import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'
import { Users } from '../../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userCollection: AngularFirestoreCollection<Users>

  constructor(private afStore: AngularFirestore) {
    this.userCollection = this.afStore.collection('users');
   }

   async newUser(users: Users){
    const defaultUserCategory ={
      categoryName: 'Informatique',
      categoryDesc: "Comprendre l'informatique dans sa globalité",
      categoryColor:'#f9f578'
    }
    const userDoc = this.userCollection.doc(users.id)
    userDoc.collection('defaultCategory').add(defaultUserCategory)
    return await userDoc.set(users)
   }


}
