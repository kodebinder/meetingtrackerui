import { Component, OnInit } from '@angular/core';
import { ERROR_MESSAGE_CONTACT_SUPPORT } from 'src/app/app.constants';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = ERROR_MESSAGE_CONTACT_SUPPORT;

  constructor() { }

  ngOnInit(): void {
  }

}
