import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APP_NAME } from 'src/app/app.constants';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  appName = APP_NAME;
  username = '';

  constructor(
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params['username'];
  }

}
