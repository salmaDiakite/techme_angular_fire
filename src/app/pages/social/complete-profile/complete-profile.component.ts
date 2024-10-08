import { Component, inject } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import { ChangeDetectionStrategy} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../services/users/users.service';
import { Users } from '../../../models/users';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrl: './complete-profile.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompleteProfileComponent {
  userId : string | null = ''
  userEmail: string = ''
  IDuser: string = ''
  userData: Users | undefined
  prenom: string = ''
  nom: string = ''
  disabled= true
  isLinear = true;
  constructor(
    private actRoute: ActivatedRoute,
    private us: UsersService,
    private router: Router,
    private afStorage: AngularFireStorage

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

  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    prenom: ['', Validators.required],
    nom: ['', Validators.required],
    numero_tel: ['', Validators.required],
    adresse_log: ['', Validators.required],
    profession: ['', Validators.required],
    genre:['', Validators.required],
    dnaissance: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    profilImg: ['', Validators.required],
    coverImg: ['', Validators.required],
  });

  firstFormValues(){
    console.log(this.firstFormGroup.value);
    
    
    if(this.firstFormGroup.valid){
      this.isLinear = !this.isLinear;
      console.log("Formulaire valid "+this.firstFormGroup.value);
      
      
    }else{
      this.isLinear = this.isLinear;
    }
  }

  secondFormValues(){
    if(this.firstFormGroup.valid){
      this.isLinear = this.isLinear;
      console.log("Premier block de formulaire "+this.firstFormGroup.value);
      
      
    }else{
      this.isLinear = !this.isLinear;
    }
  }

  async selectFile(event: any): Promise<void> {
    if (event.target.files) {
      for (let i = 0; i < File.length; i++) {
        const file = event.target.files[i];
        const filePath = `PhotoProfile/${Date.now()}_${file.name}`;
        const task = this.afStorage.upload(filePath, file)
        const uploadTaskSnapshot = await task
        const url = await uploadTaskSnapshot.ref.getDownloadURL();
        await this.us.updateUserProfilImg(url, this.userData?.id)
      }
    }
  }

  async coverEvent(event: any): Promise<void> {
    if (event.target.files) {
      for (let i = 0; i < File.length; i++) {
        const file = event.target.files[i];
        const filePath = `PhotoCouverture/${Date.now()}_${file.name}`;
        const task = this.afStorage.upload(filePath, file)
        const uploadTaskSnapshot = await task
        const url = await uploadTaskSnapshot.ref.getDownloadURL();
        await this.us.updateUserCoverImg(url, this.userData?.id)
      }
    }
  }
}
