import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';\
import { MatChipsModule } from '@angular/material/chips';

import { FeasibilityTrackComponent } from './feasibility-track.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule
  ],
  declarations: [FeasibilityTrackComponent],
  exports: [ FeasibilityTrackComponent ]
})
export class FeasibilityTrackModule { }
