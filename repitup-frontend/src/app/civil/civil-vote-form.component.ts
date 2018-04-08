import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContractsService } from '../contracts.service';

@Component({
  selector: 'app-civil-vote-form',
  templateUrl: './civil-vote-form.component.html',
})


export class CivilVoteFormComponent implements OnInit {

  contractService:ContractsService;
  constructor(private cs: ContractsService) { 
    this.contractService = cs;
  }

  ngOnInit() {
  }

  onSendFunds(cs: ContractsService) {
    console.log("this.contractService -> "+this.contractService);
    this.contractService.sendFunds();
  }

  vote(form: NgForm) {
    // console.log(form.value);
  }

}
