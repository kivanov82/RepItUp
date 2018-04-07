import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FeasibilityTrackModule } from '../feasibility-track/feasibility-track.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    FeasibilityTrackModule
  ],
  exports:[
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    FeasibilityTrackModule
  ],
  declarations: [
    
  ]
})
export class MainModule { }
