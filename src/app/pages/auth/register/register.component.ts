import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../../../services/utilities.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit  {
  reactiveForm!: FormGroup;
  title: string =''
  desc: string = ''
  mShow:boolean = false
  cmShow:boolean = false
  check:boolean = false
  constructor(public uts:UtilitiesService, public router: Router,public fb:FormBuilder) {
    this.title = this.uts.title
    this.desc = this.uts.desc;
   }

   ngOnInit(): void {
     this.reactiveForm= this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
     })
   }

   get reactFormControl(){
    return this.reactiveForm.controls;
   }

   connexionRoute(){
    this.router.navigate(['connexion'])
   }

   inscriptionRoute(){
    this.router.navigate(['register'])
   }

   validForm(){
    if(this.reactiveForm.valid){
      if(this.reactiveForm.value.password === this.reactiveForm.value.confirmPassword){
        console.log("Inscription réussie");
        console.log(this.reactiveForm.value);
      }else{
        
        
        console.log("Les mots de passe ne correspondent pas");
        this.reactiveForm.get('password')?.setErrors({ mismatch: true });
        this.reactiveForm.get('confirmPassword')?.setErrors({ mismatch: true });
        
      }
    
    }else{
      console.log(this.reactiveForm);
      console.log("Formulaire non valid");
      
    }

   }

}
