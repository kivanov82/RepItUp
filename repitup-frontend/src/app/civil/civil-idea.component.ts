import { Component, OnInit, Input } from '@angular/core';
import { ContractsService } from '../contracts.service';
import { BigNumber } from 'bignumber.js';

@Component({
  selector: 'app-civil-idea',
  templateUrl: './civil-idea.component.html',
  styleUrls: ['./civil-idea.component.css'],
})
export class CivilIdeaComponent implements OnInit {

  @Input() id: Number = 0;
  @Input() description: Number;
  @Input() numTokens: Number = 0;
  @Input() userBalance: Number = 0;

  private balance:number;
    get bar():number {
        return this.balance;
    }
    set bar(theBar:number) {
        this.balance = this.round(theBar, 18);
    }

    round(number, precision) {
      return number * Math.pow(10, precision);
    };

ngOnInit() {
}

  constructor(cs: ContractsService) { 
    cs.getUserBalance().then(balance => this.bar = balance);
   }

}
