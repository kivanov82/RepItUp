import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeasibilityTrackComponent } from './feasibility-track.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FeasibilityTrackComponent],
  exports: [ FeasibilityTrackComponent ]
})
export class FeasibilityTrackModule { }
