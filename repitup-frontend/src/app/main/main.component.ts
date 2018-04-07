import { Component, NgZone, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  public authenticated = false;
  public isCivil;
  public isMunicipality;
  public isEntrepreneur;

  constructor(private zone: NgZone, public auth: AuthService) {
    this.authenticated = this.auth.isAuthenticated();
  }

  ngOnInit() {
    this.isCivil = true;
    this.isMunicipality = false;
    this.isEntrepreneur = false;

    this.auth.authUpdate.subscribe(() => {
      this.zone.run(() => {
        this.authenticated = this.auth.isAuthenticated();
      });
    })
  }

}
