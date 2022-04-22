import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_NAME, ERROR_MESSAGE_INVALID_CREDENTIALS, PASSWORD, USERNAME } from 'src/app/app.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = USERNAME;
  password = PASSWORD;
  appName = APP_NAME;
  errorMessage = ERROR_MESSAGE_INVALID_CREDENTIALS;
  invalidLogin = false;

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {

  }

  handleLogin(): void {
    if (this.username === USERNAME && this.password === PASSWORD) {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }

  }

}
