import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../../../services/utilities.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent implements OnInit {
  reactiveForm!: FormGroup
  title: string = ''
  desc: string = ''
  mShow: boolean = false
  cmShow: boolean = false

  constructor(
    public uts: UtilitiesService,
    public router: Router,
    public fb: FormBuilder,
    private as: AuthService
  ) {
    this.title = this.uts.title
    this.desc = this.uts.desc;
  }

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  get reactFormControl() {
    return this.reactiveForm.controls;
  }

  async connectForm() {
    if (this.reactiveForm.valid) {
      console.log(this.reactiveForm);
      
      const email = this.reactiveForm.value.email
      const password = this.reactiveForm.value.password
      try {
        const authResult = await this.as.loginUser(email, password);
        if(authResult.user?.emailVerified){
          this.router.navigate(['accueil'])
        }else{
          this.uts.showNotification('Impossible de vous connecter veuillez d\'abord verifier votre email.')
        }
      } catch (error) {
        this.uts.showNotification("Veuillez d'abord creer un compte s'il vous plait")
      }
    }else{
      console.log("erreur");
      
    }
  }
  inscriptionRoute() {
    this.router.navigate(['register'])
  }

  openMOComponent(){
    this.router.navigate(['forget-password'])
  }

}
