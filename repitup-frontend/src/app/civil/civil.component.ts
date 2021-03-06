import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../idea.service';
import { ContractsService } from '../contracts.service';

@Component({
  selector: 'app-civil',
  templateUrl: './civil.component.html',
  styleUrls: ['./civil.component.css']
})
export class CivilComponent implements OnInit {

  mockDescription: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem ante, sodales id mauris tristique, malesuada aliquet lectus. Nunc risus ipsum, lacinia sed laoreet id, viverra ut mi. Donec mattis elit velit, vulputate condimentum libero suscipit ut. Donec blandit vestibulum lorem ut rutrum. Ut gravida ligula orci, vel fermentum felis condimentum a. Nullam vestibulum erat nec nisi mollis blandit. Praesent gravida varius ligula ut porttitor. Duis dignissim maximus fringilla. Etiam faucibus posuere odio vitae finibus.';

  popupRedirect: boolean = false;
  loading: boolean = true;
  idea: object;

  constructor(private ideaService: IdeaService) { }

  ngOnInit() {
    this.ideaService.getLastIdea()
      .subscribe((response) => {
        this.idea = response;
        this.loading = false;
      });
  }

}
