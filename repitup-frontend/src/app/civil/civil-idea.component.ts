import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-civil-idea',
  templateUrl: './civil-idea.component.html',
  styleUrls: ['./civil-idea.component.css'],
})
export class CivilIdeaComponent {

  @Input() id: Number;
  @Input() description: Number;
  @Input() numTokens: Number = 0;
  @Input() userBalance: Number = 0;

  constructor() { }

}
