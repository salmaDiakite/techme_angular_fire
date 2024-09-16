import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'


const materialsModule=[
  MatIconModule,
  MatButtonModule
]
@NgModule({
  declarations: [],
  imports: [materialsModule],
  exports: [materialsModule]
})
export class MaterialUiModule { }
