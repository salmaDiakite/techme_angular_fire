import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
const materialsModule=[
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatSnackBarModule
]
@NgModule({
  declarations: [],
  imports: [materialsModule],
  exports: [materialsModule]
})
export class MaterialUiModule { }
