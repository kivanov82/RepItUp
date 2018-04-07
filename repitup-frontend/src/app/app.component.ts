import { Component } from '@angular/core';
import { ContractsService } from './contracts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public balance: number;

  constructor(cs: ContractsService) {
    cs.getUserBalance().then(balance => this.balance = balance);
  }

  public onSendFunds(cs: ContractsService) {
    cs.sendFunds("Address Here", "Amount Here").then(response => console.log(response));
  }
}
