import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  title: string ='Teach-Me';
  desc:string = 'Une plateforme de cours en ligne, vous pourrez profiter des meilleurs cours en guinée au meilleurs prix'

  constructor(private snBar:MatSnackBar) { }

  showNotification(msg:string,btn?:string){
    this.snBar.open(msg, btn, {
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['success-snackbar']
    });
  }
}
