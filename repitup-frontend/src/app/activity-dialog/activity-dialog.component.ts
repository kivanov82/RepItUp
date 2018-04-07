import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-activity-dialog',
  templateUrl: './activity-dialog.component.html'
})
export class ActivityDialogComponent implements OnInit {

  checkboxes = [ 
    { value: "Legal Advices" }, 
    { value: "Permits" }, 
    { value: "Supply Chain" }, 
    { value: "Public Funding" }, 
    { value: "VC Funding" }, 
    { value: "Volunteers"}
  ];

  constructor(
    public dialogRef: MatDialogRef<ActivityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
