import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  constructor(
    private authService : AuthService,
    private router: Router
  ){

  }

  logoutUser(){
    this.authService.logoutUser()
    this.router.navigate(['LandingPage']);
  }

  voirProfil(){
    this.router.navigate(['profil']);
  }

}
