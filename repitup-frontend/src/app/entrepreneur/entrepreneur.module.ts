import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from '../main/main.module';
import { HttpModule } from '@angular/http';

import { FeasibilityTrackComponent } from '../feasibility-track/feasibility-track.component';

@NgModule({
  imports: [
    CommonModule,
    MainModule,
    HttpModule
  ],
  declarations: [
    
  ]
})
export class EntrepreneurModule { }
