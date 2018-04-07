import { Component, OnInit, Inject } from '@angular/core';
import { CHALLENGES } from '../challenges';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivityDialogComponent } from '../activity-dialog/activity-dialog.component';

import { FeasibilityTrackComponent } from '../feasibility-track/feasibility-track.component';

@Component({
  selector: 'app-entrepreneur',
  templateUrl: './entrepreneur.component.html',
  styleUrls: ['./entrepreneur.component.css']
})

export class EntrepreneurComponent implements OnInit {

  challenges = CHALLENGES;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(ActivityDialogComponent, {
      width: '500px',
      data: { data: "test" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }
}
