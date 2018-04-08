import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-feasibility-track',
  templateUrl: './feasibility-track.component.html',
  styleUrls: ['./feasibility-track.component.css']
})
export class FeasibilityTrackComponent {

  @Output() close = new EventEmitter();

  constructor() { }

}
