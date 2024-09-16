import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
  selector: 'app-langding-page',
  templateUrl: './langding-page.component.html',
  styleUrl: './langding-page.component.scss'
})
export class LangdingPageComponent implements OnInit{
  titre: string = '';
  desc:string = ""
  constructor( private uts:UtilitiesService) { }
  ngOnInit(): void {
    this.titre = this.uts.title
    this.desc = this.uts.desc;
  }

}
