import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enemy-board',
  templateUrl: './enemy-board.component.html',
  styleUrls: ['./enemy-board.component.css']
})
export class EnemyBoardComponent implements OnInit {

  colcount = 10;
  columnArray: number[];

  constructor() {
    this.columnArray = Array(this.colcount).fill(0).map((x, i) => i);
  }

  ngOnInit() {
  }

}
