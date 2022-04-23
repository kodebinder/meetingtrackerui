import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_NAME, ERROR_MESSAGE_INVALID_CREDENTIALS, PASSWORD, USERNAME } from 'src/app/app.constants';
import { HardcodedAuthenticationService } from 'src/app/service/authentication/hardcoded-authentication.service';

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
    private router: Router,
    public hardcodedAuthenticationService: HardcodedAuthenticationService
  ) {

  }

  ngOnInit() {

  }

  handleLogin(): void {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }

  }

}
