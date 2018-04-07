import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IdeaService {

  constructor(private http: HttpClient, private apiUrl: string) { }

  getIdea(id: number) {
    return this.http.get(`${this.apiUrl}/idea/${id}`);
  }

}
