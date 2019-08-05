import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Array<any>;
  mode: string;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.mode = 'indeterminate';
    this.httpClient.get('/api/skills').subscribe((ret: Array<any>) => { 
      this.cards = ret;
      this.mode = 'determinate';
    }, err => {
      console.log(err);
      this.mode = 'determinate';
    });
  }

}
