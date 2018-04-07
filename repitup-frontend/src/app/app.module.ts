import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as data from './config/tokenabis.json';
const jsonData = (<any>data);
console.log(jsonData);

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MunicipalityComponent } from './municipality/municipality.component';
import { CivilComponent } from './civil/civil.component';
import { CivilChallengeComponent } from './civil/civil-challenge.component';
import { CivilVoteFormComponent } from './civil/civil-vote-form.component';
import { EntrepreneurComponent } from './entrepreneur/entrepreneur.component';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

import { KvkIdentityWidgetComponent } from './kvk-identity-widget/kvk-identity-widget.component';
import { ActivityDialogComponent } from './activity-dialog/activity-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MunicipalityComponent,
    CivilComponent,
    CivilChallengeComponent,
    CivilVoteFormComponent,
    EntrepreneurComponent,
    KvkIdentityWidgetComponent,
    ActivityDialogComponent
  ],
  imports: [
    BrowserModule,
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
    MatInputModule
  ],
  entryComponents: [ActivityDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
