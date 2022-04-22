import { Component, OnInit } from '@angular/core';
import { APP_NAME } from 'src/app/app.constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  appName = APP_NAME;
  
  constructor() { }

  ngOnInit(): void {
  }

}
