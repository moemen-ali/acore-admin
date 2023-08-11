import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesPageComponent } from './features-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { MatSidenavModule } from '@angular/material/sidenav';





@NgModule({
  declarations: [
    FeaturesPageComponent,
    ErrorPageComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    LayoutModule,
    MatSidenavModule,
    
  ]
})
export class FeaturesModule { }
