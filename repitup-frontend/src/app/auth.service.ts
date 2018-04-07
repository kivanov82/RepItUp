import { EventEmitter, Injectable, Output } from '@angular/core';

declare global {
  interface Window { auth: any }
}

const storageKey = 'app-auth';

@Injectable()
export class AuthService {

  @Output() authUpdate = new EventEmitter();
  private authenticated: boolean = false;

  constructor() {
    this.load();
    window.auth = this;
  }

  setAuthenticated(authenticated: boolean) {
    this.authenticated = authenticated;
    this.persist();
    this.authUpdate.emit({
      authenticated: this.authenticated
    });
  }

  isAuthenticated() {
    return this.authenticated;
  }

  private load() {
    const json = window.localStorage.getItem(storageKey);

    if (!json) {
      return;
    }

    const { authenticated } = JSON.parse(json);
    this.authenticated = authenticated;
  }

  private persist() {
    window.localStorage.setItem(storageKey, JSON.stringify({
      authenticated: this.authenticated
    }));
  }

}
