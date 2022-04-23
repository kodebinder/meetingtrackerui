import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_NAME } from 'src/app/app.constants';
import { HardcodedAuthenticationService } from 'src/app/service/authentication/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  appName = APP_NAME;

  constructor(
    private router: Router,
    public hardcodedAuthenticationService: HardcodedAuthenticationService
  ) {

  }

  ngOnInit(): void {
  
  }

}
