import { Component, OnInit } from '@angular/core';
import { ContractsService } from './contracts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public balance: number;

  constructor(cs: ContractsService) {
  
    cs.getUserBalance().then(balance => this.balance = balance);
  }

  ngOnInit() {
    
  }

 


  public onSendFunds() {
  }
}
