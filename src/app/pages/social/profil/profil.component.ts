import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../services/users/users.service';
import { Users } from '../../../models/users';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {
  userId : string | null = ''
  userEmail: string = ''
  IDuser: string = ''
  userData: Users | undefined
  prenom: string = ''
  nom: string = ''
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private us: UsersService,
  ){
    this.userId = this.actRoute.snapshot.data['user'].uid
    this.userEmail = this.actRoute.snapshot.data['user'].email
    this.us.getUserByEmail(this.userEmail).subscribe(user => {
      if (user) {
        console.log('User data:', user); // Debug: log the user data
        this.userId = user.id;
        this.IDuser = user.id.toString()
        this.prenom = user.data.prenom
        this.nom = user.data.nom
        console.log(this.IDuser+" me voila "+this.prenom);
        
        this.userData = user.data;
        console.log(this.userData);
        
        
        
      } else {
        console.log('User not found'); // Debug: log when user is not found
        this.userId = null;
      }
    });
  }

  completeProfil(){
    this.router.navigate(['complete-profil'])
  }
}
