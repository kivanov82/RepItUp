import { Component, EventEmitter, Output } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  questionId = environment.kvk.questionId;

  constructor(public auth: AuthService) { }

}
