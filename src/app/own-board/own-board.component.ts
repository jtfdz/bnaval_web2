import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-own-board',
  templateUrl: './own-board.component.html',
  styleUrls: ['./own-board.component.css']
})
export class OwnBoardComponent implements OnInit {

  colcount = 10;
  columnArray: number[];

  constructor() {
    this.columnArray = Array(this.colcount).fill(0).map((x, i) => i);
  }

  ngOnInit() {
  }

}
