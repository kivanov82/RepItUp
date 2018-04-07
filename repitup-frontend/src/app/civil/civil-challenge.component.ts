import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-civil-challenge',
  templateUrl: './civil-challenge.component.html',
  styleUrls: ['./civil-challenge.component.css'],
})
export class CivilChallengeComponent {

  @Input() id: Number;
  @Input() description: Number;
  @Input() numTokens: Number = 0;
  @Input() userBalance: Number = 0;

  constructor() { }

}
