import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Categories } from '../../models/categories';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categoryCollection: AngularFirestoreCollection<Categories>

  constructor(private afs : AngularFirestore) {
    this.categoryCollection = this.afs.collection('categories')
   }

   getAllCategories(): Observable<Categories[]>{
    return this.categoryCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Categories;
          const id = a.payload.doc.id;
          return { ...data, id };
        })
      )
    );
   }
}
