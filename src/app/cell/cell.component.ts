import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Socket } from "ngx-socket-io";


@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() xCoord: string;
  @Input() yCoord: number;
  @Input() status: number;
  name;
  room;
  fullCoord = "";



  constructor(private route: ActivatedRoute, private socket: Socket) {}

 

  ngOnInit() {
    this.fullCoord = this.xCoord + this.yCoord;
    this.route.paramMap.subscribe(params => {
      this.name = params["params"].name;
      this.room = params["params"].id;
    });
  }


  onAttack(): void{
    console.log("clicked: ", this.fullCoord, this.status);
    this.socket.emit("click", {
        name: this.name,
        room: this.room,
        click: this.fullCoord
    });
  }




}

