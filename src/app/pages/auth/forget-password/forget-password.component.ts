import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilitiesService } from '../../../services/utilities.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent implements OnInit {
  reactiveForm!: FormGroup
  title: string = ''
  desc:string =''
  constructor(
    private fb: FormBuilder,
    private uts: UtilitiesService,
    private router: Router,
    public as : AuthService
  ){
    this.title = this.uts.title
    this.desc = this.uts.desc;
  }
  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
    });
  }

  get reactFormControl(){
    return this.reactiveForm.controls;
  }

  async sendLink(){
    if(this.reactiveForm.valid){
      const email = this.reactiveForm.value.email
      const authResult = await this.as.updatePassword(email)
      await this.uts.showNotification('Un lien de modification vous a été envoyé veuillez donc verifier votre boite mail.')
      this.router.navigate(['connexion'])
    }
  }

  inscriptionRoute(){
    this.router.navigate(['register'])
  }

}
