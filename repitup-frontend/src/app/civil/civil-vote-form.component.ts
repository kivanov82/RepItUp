import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContractsService } from '../contracts.service';

@Component({
  selector: 'app-civil-vote-form',
  templateUrl: './civil-vote-form.component.html',
})
export class CivilVoteFormComponent implements OnInit {

  constructor(cs: ContractsService) { 
    cs.sendFunds(1);
  }

  ngOnInit() {
  }

  onSendFunds(cs: ContractsService) {
    console.log("when It's done");
    cs.sendFunds(1);
  }

  vote(form: NgForm) {
    // console.log(form.value);
  }

}
