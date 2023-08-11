import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TopbarComponent,
    SidemenuComponent
  ],
  exports: [
    TopbarComponent,
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule
  ]
})
export class LayoutModule { }
