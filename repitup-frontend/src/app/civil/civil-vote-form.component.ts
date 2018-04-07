import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-civil-vote-form',
  templateUrl: './civil-vote-form.component.html',
})
export class CivilVoteFormComponent {

  constructor() { }

  vote(form: NgForm) {
    console.log(form.value);
  }

}
