import { Component, OnInit } from '@angular/core';

import { CHALLENGES } from '../challenges';

@Component({
  selector: 'app-entrepreneur',
  templateUrl: './entrepreneur.component.html',
  styleUrls: ['./entrepreneur.component.css']
})
export class EntrepreneurComponent implements OnInit {

  challenges = CHALLENGES;

  constructor() { }

  ngOnInit() {
  }

}
