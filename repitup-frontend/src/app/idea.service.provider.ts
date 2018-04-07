import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IdeaService } from './idea.service';

function IdeaServiceFactory(http: HttpClient) {
  return new IdeaService(http, environment.apiUrl);
}

export const ideaServiceProvider = {
  provide: IdeaService,
  useFactory: IdeaServiceFactory,
  deps: [HttpClient]
}
