import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../../services/utilities.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-langding-page',
  templateUrl: './langding-page.component.html',
  styleUrl: './langding-page.component.scss'
})
export class LangdingPageComponent implements OnInit{
  titre: string = '';
  desc:string = ""
  constructor( private uts:UtilitiesService,private router: Router) { }
  ngOnInit(): void {
    this.titre = this.uts.title
    this.desc = this.uts.desc;
  }

  registerRoute(){
    this.router.navigate(['register'])
  }

  connexionRoute(){
    this.router.navigate(['connexion'])
  }

}
