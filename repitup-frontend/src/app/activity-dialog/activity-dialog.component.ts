import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { DialogData } from './DialogData';
import { AppSettings } from '../config/AppSettings';

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
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _http: Http) { }

  ngOnInit() {
  }

  onSubmit(postData: DialogData){
    this._http.post('/idea/save', postData).subscribe(status=> console.log(JSON.stringify(status)));
    this.dialogRef.close();
  }
}
