import { Component } from '@angular/core';
import { UtilitiesService } from '../../../services/utilities.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent {
  title: string =''
  desc: string = ''
  mShow:boolean = false
  cmShow:boolean = false

  constructor(public uts:UtilitiesService, public router: Router) {
    this.title = this.uts.title
    this.desc = this.uts.desc;
   }

   inscriptionRoute(){
    this.router.navigate(['register'])
   }

}
