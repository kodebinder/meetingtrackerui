import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_NAME } from 'src/app/app.constants';
import { HardcodedAuthenticationService } from 'src/app/service/authentication/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  appName: string = APP_NAME;

  constructor(
    private router: Router,
    public hardcodedAuthenticationService: HardcodedAuthenticationService
  ) {

  }

  ngOnInit(): void {
    this.hardcodedAuthenticationService.logout();
  }

}
