import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() xCoord: string;
  @Input() yCoord: number;
  @Input() status: number;

  fullCoord = "";

  constructor() { }

  ngOnInit() {
    this.fullCoord = this.xCoord + this.yCoord;
  }

  


  onAttack(): void{
    console.log("clicked: ", this.fullCoord, this.status);
  }

}
