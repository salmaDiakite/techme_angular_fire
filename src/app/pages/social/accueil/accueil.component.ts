import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users/users.service';
import { Users } from '../../../models/users';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  
  userEmail: string = ''
  userId: string | null = ''
  prenom: string =''
  IDuser =''
  userData: Users[] = []
modalite: any;
  // constructor(
  //   private actRoute: ActivatedRoute,
  //   private us: UsersService
  // ){
  //   this.userEmail = this.actRoute.snapshot.data['user'].email
  //   this.us.getUserByEmail(this.userEmail).subscribe(user => {
  //     if (user) {
  //       console.log('User data:', user); // Debug: log the user data
  //       this.userId = user.id;
  //       this.IDuser = user.id.toString()
  //       this.prenom = user.data.prenom
  //       console.log(this.IDuser+" me voila "+this.prenom);
        
  //       this.userData = user.data;
  //       console.log(this.userData);
        
        
        
  //     } else {
  //       console.log('User not found'); // Debug: log when user is not found
  //       this.userId = null;
  //     }
  //   });
  // }

  someMethod() {
    this.trigger.openMenu();
  }
}
