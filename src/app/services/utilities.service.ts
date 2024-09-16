import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  title: string ='Teach-Me';
  desc:string = 'Une plateforme de cours en ligne, vous pourrez profiter des meilleurs cours en guinée au meilleurs prix'

  constructor() { }
}
