import { EventEmitter, Injectable, Output } from '@angular/core';
import { User } from './user';

declare global {
  interface Window { auth: any }
}

const storageKey = 'app-auth-user';

@Injectable()
export class AuthService {

  @Output() authUpdate = new EventEmitter();
  user: User;

  constructor() {
    this.load();
    window.auth = this;
  }

  authenticate({ sessionKey, companyName }) {
    this.user = new User(sessionKey, companyName);
    this.persist();
  }

  logout() {
    this.user = null;
    this.persist();
  }

  isAuthenticated(): boolean {
    return Boolean(this.user);
  }

  private load() {
    const json = window.localStorage.getItem(storageKey);

    if (!json) {
      return;
    }

    try {
      this.user = User.fromJSON(json);
    } catch (error) {
      console.error(error);
    }
  }

  private persist() {
    if (!this.user) {
      window.localStorage.removeItem(storageKey);
    } else {
      window.localStorage.setItem(storageKey, JSON.stringify(this.user));
    }
  }

}
