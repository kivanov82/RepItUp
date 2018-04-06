import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  // Component Visibility
  public isCivil;
  public isMunicipality;
  public isEntrepreneur;

  kvkQuestionId = environment.kvk.questionId;

  constructor() { }

  ngOnInit() {
    this.isCivil = true;
    this.isMunicipality = true;
    this.isEntrepreneur = true;
  }

}
