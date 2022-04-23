import { Injectable } from '@angular/core';
import { PASSWORD, USERNAME } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    if (username === USERNAME && password === PASSWORD) {
      sessionStorage.setItem('token', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('token');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('token');
  }
}
