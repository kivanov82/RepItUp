import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContractsService } from '../contracts.service';

@Component({
  selector: 'app-civil-vote-form',
  templateUrl: './civil-vote-form.component.html',
})
export class CivilVoteFormComponent implements OnInit {

  constructor(cs: ContractsService) { 
    cs.sendFunds();
  }

  ngOnInit() {
  }

  onSendFunds(cs: ContractsService) {
    console.log("when It's done");
    cs.sendFunds();
  }

  vote(form: NgForm) {
    // console.log(form.value);
  }

}
