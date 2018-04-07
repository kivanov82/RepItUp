import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import * as data from './config/tokenabis.json';
const jsonData = (<any>data);
console.log(jsonData);

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MunicipalityComponent } from './municipality/municipality.component';
import { CivilComponent } from './civil/civil.component';
import { CivilIdeaComponent } from './civil/civil-idea.component';
import { CivilVoteFormComponent } from './civil/civil-vote-form.component';
import { EntrepreneurComponent } from './entrepreneur/entrepreneur.component';

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

import { KvkIdentityWidgetComponent } from './kvk-identity-widget/kvk-identity-widget.component';
import { ActivityDialogComponent } from './activity-dialog/activity-dialog.component';
import { FlexLayoutModule } from "@angular/flex-layout";

import { ideaServiceProvider } from './idea.service.provider';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MunicipalityComponent,
    CivilComponent,
    CivilIdeaComponent,
    CivilVoteFormComponent,
    EntrepreneurComponent,
    KvkIdentityWidgetComponent,
    ActivityDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
    FlexLayoutModule
  ],
  providers: [ideaServiceProvider],
  entryComponents: [ActivityDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
