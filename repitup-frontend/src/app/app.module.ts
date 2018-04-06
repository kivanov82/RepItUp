import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MunicipalityComponent } from './municipality/municipality.component';
import { CivilComponent } from './civil/civil.component';
import { EntrepreneurComponent } from './entrepreneur/entrepreneur.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MunicipalityComponent,
    CivilComponent,
    EntrepreneurComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
