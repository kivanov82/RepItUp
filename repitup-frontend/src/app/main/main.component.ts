import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  public isCivil;
  public isMunicipality;
  public isEntrepreneur;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.isCivil = false;
    this.isMunicipality = false;
    this.isEntrepreneur = false;
  }

}
