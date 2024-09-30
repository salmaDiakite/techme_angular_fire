import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggle} from '@angular/material/button-toggle'
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
const materialsModule=[
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatTabsModule,
  MatInputModule,
  MatMenuModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatButtonToggle,
  MatSidenavModule,
  MatSelectModule
]
@NgModule({
  declarations: [],
  imports: [materialsModule],
  exports: [materialsModule]
})
export class MaterialUiModule { }
