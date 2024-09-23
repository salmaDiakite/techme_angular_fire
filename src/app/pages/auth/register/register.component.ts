import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../../../services/utilities.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { UsersService } from '../../../services/users/users.service';
import { Users } from '../../../models/users';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  reactiveForm!: FormGroup;
  isValidForm: boolean = false
  title: string = ''
  desc: string = ''
  mShow: boolean = false
  cmShow: boolean = false
  check: boolean = false
  constructor(
    public uts: UtilitiesService,
    public router: Router,
    public fb: FormBuilder,
    public as: AuthService,
    public us: UsersService,
    public afStore: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {
    this.title = this.uts.title
    this.desc = this.uts.desc;
  }

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    })
  }

  get reactFormControl() {
    return this.reactiveForm.controls;
  }

  connexionRoute() {
    this.router.navigate(['connexion'])
  }

  inscriptionRoute() {
    this.router.navigate(['register'])
  }

  openGmail = () => window.open('https://www.google.com/mail','_blank')

  async validForm() {
    if (this.reactiveForm.valid) {
      this.check = !this.check
      if (this.reactiveForm.value.password === this.reactiveForm.value.confirmPassword) {
        const email = this.reactiveForm.value.email;
        const password = this.reactiveForm.value.password;
        try {
          const authResult = await this.as.registerUser(email, password)
          const userData: Users = {
            id: this.afStore.createId(),
            prenom: this.reactiveForm.value.prenom,
            nom: this.reactiveForm.value.nom,
            email: this.reactiveForm.value.email,
            dNaissance: '',
            imgUrl: '',
            dInscription: new Date().toISOString(),
            password : this.reactiveForm.value.password
          }
          await this.us.newUser(userData);
          await authResult.user?.sendEmailVerification()
          this.openGmail()
          this.uts.showNotification('Compte créé avec succes')
          this.router.navigate(['email-verification'])
          

        } catch (error) {
          this.uts.showNotification("une erreur s'est produite")
        }


      } else {


        console.log("Les mots de passe ne correspondent pas");
        this.reactiveForm.get('password')?.setErrors({ mismatch: true });
        this.reactiveForm.get('confirmPassword')?.setErrors({ mismatch: true });

      }

    } else {
      console.log(this.reactiveForm);
      console.log("Formulaire non valid");

    }

  }

}
