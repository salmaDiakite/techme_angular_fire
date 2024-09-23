import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../../../services/utilities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { Categories } from '../../../models/categories';
import { CategoriesService } from '../../../services/users/categories.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrl: './email-verification.component.scss'
})
export class EmailVerificationComponent implements OnInit {
  userID = ''
  userEmail= ''
  userPSD = ''
  title: string =''
  desc: string =''
  isEmailVerified: BehaviorSubject<boolean>
  categorie! : Observable<Categories[]>
  isProgressBar=false
  constructor(
    private uts: UtilitiesService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private as : AuthService,
    public cs: CategoriesService

  ) {
    this.title = this.uts.title
    this.desc = this.uts.desc;
    this.userID = this.actRoute.snapshot.data['user'].uid
    this.userEmail = this.actRoute.snapshot.data['user'].email
    this.userPSD = this.actRoute.snapshot.data['user'].password
    this.isEmailVerified = this.actRoute.snapshot.data['user'].emailVerified
    console.log(this.userEmail+' etat: '+this.isEmailVerified+" PSD: "+this.userPSD);
    
   }

   ngOnInit(): void {
     this.categorie = this.cs.getAllCategories()
   }

   wrongEmail = () => this.as.logoutUser()

   reloadCategory(){
    
    this.isEmailVerified = this.actRoute.snapshot.data['user'].reload()
    
    console.log('after reload '+this.isEmailVerified.value);
    

    
   }

}
