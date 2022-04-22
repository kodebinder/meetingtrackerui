import { Component, OnInit } from '@angular/core';
import { APP_NAME } from 'src/app/app.constants';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  appName : string = APP_NAME;

  constructor() { }

  ngOnInit(): void {
  }

}
