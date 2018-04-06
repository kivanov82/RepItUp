import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // Component Visibility
  public isCivil;
  public isMunicipality;
  public isEntrepreneur;
  
  constructor() { }

  ngOnInit() {
    this.isCivil = true;
    this.isMunicipality = true;
    this.isEntrepreneur = true;
  }

}
