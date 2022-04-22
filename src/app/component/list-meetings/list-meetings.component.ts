import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Meeting } from 'src/app/model/Meeting';

@Component({
  selector: 'app-list-meetings',
  templateUrl: './list-meetings.component.html',
  styleUrls: ['./list-meetings.component.css']
})
export class ListMeetingsComponent implements OnInit, AfterViewInit {

  @ViewChild('dataTable', { static: false }) table: any;
  dataTable: any;

  meetings = [
    new Meeting(1, 'Annual Appraisal Meeting with Team Leader', false, this.randomDate(new Date(), new Date(2022, 2, 28))),
    new Meeting(5, 'Daily Stand up call with New York Team', true, this.randomDate(new Date(), this.getEndDate())),
    new Meeting(3, 'Retrospective Meeting with London Team', false, this.randomDate(new Date(), new Date(2022, 10, 31)))
  ]

  constructor() { }

  ngAfterViewInit(): void {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }

  ngOnInit(): void {
  }

  randomDate(start: any, end: any): any {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  getStartDate() : any {
    return new Date();
  }

  getEndDate() : any {
    var twoHoursBefore = new Date();
    twoHoursBefore.setHours(twoHoursBefore.getHours() - 2);
    return twoHoursBefore;
  }

}
