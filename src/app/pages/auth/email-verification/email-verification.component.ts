import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../../../services/utilities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { Categories } from '../../../models/categories';
import { CategoriesService } from '../../../services/users/categories.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsersService } from '../../../services/users/users.service';
import { Users } from '../../../models/users';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrl: './email-verification.component.scss'
})
export class EmailVerificationComponent implements OnInit {
  userID = ''
  userEmail = ''
  userPSD = ''
  title: string = ''
  desc: string = ''
  minimumCategory: boolean = false
  defaultCatRecommended: number = 0
  isEmailVerified: BehaviorSubject<boolean>
  categorie!: Observable<Categories[]>
  userCategory: Categories[] = []
  isProgressBar = false
  currentUserData?: Observable<Users[]>
  userData: Users[] = [];
  IDuser=''
  userId: Users | null | undefined;
  constructor(
    private uts: UtilitiesService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private as: AuthService,
    public cs: CategoriesService,
    public us: UsersService

  ) {
    this.title = this.uts.title
    this.desc = this.uts.desc;
    this.userID = this.actRoute.snapshot.data['user'].uid
    this.userEmail = this.actRoute.snapshot.data['user'].email
    this.userPSD = this.actRoute.snapshot.data['user'].password
    this.isEmailVerified = this.actRoute.snapshot.data['user'].emailVerified
    console.log(this.userEmail + ' etat: ' + this.isEmailVerified + " userID: " + this.userID);
    
    // if(this.userID){
    //   this.currentUserData = this.us.getUser(this.userID)
    //   this.currentUserData.subscribe(data =>{
    //     this.userData = data
    //     console.log(this.userData?.nom);
        
    //   })
    // }
    
  }

  ngOnInit(): void {
    this.us.getUserByEmail(this.userEmail).subscribe(user => {
      if (user) {
        console.log('User data:', user); // Debug: log the user data
        this.userId = user.id;
        this.IDuser = user.id.toString()
        console.log(this.IDuser+" me voila");
        
        this.userData = user;
      } else {
        console.log('User not found'); // Debug: log when user is not found
        this.userId = null;
      }
    });

    this.categorie = this.cs.getAllCategories()
  }

  wrongEmail = () => this.as.logoutUser()

  reloadCategory() {
    this.isProgressBar = true
    this.isEmailVerified = this.actRoute.snapshot.data['user'].reload()
    this.isEmailVerified.next(this.actRoute.snapshot.data['user'].emailVerified)
    console.log('after reload ' + this.isEmailVerified.value);
    this.isProgressBar = false

  }

  choosenCategory(cat: Categories, checked: boolean) {
    if (checked) {
      this.userCategory.push(cat)
      this.minimumCategory = this.userCategory.length < 3 ? false : true
      this.defaultCatRecommended = this.userCategory.length
      console.log(this.defaultCatRecommended);

    } else {
      this.userCategory.pop()
      console.log(this.userCategory);
      this.defaultCatRecommended = this.userCategory.length
      this.minimumCategory = this.userCategory.length < 3 ? false : true
      console.log(this.defaultCatRecommended);
    }
  }

  saveCategories() {
    this.isProgressBar = true
    this.userCategory.forEach((category) => {
      this.us.addUserChossenCategories(this.IDuser, category)
    })
    this.uts.showNotification("Categories sauvegardées avec succès")
    this.isProgressBar = false
  }

}
