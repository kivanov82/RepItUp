import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {

  public authenticated = false;
  public isCivil;
  public isMunicipality;
  public isEntrepreneur;

  ngOnInit() {
    this.isCivil = false;
    this.isMunicipality = false;
    this.isEntrepreneur = true;

  }

  constructor(public auth: AuthService) { }
}
