import { Component, OnInit, Injectable, NgModule } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Socket } from "ngx-socket-io";
import { Observable } from "rxjs";

@Component({
  selector: 'app-own-board',
  templateUrl: './own-board.component.html',
  styleUrls: ['./own-board.component.css']
})
export class OwnBoardComponent implements OnInit {

  colcount = 10;
  columnArray: number[];
  name;
  room;
  ownShipsObsv;
  user;
  statusZ = [];
  statusA = [];
  statusB = [];
  statusC = [];
  statusD = [];
  statusE = [];
  statusF = [];
  statusG = [];
  statusH = [];
  statusI = [];
  statusJ = [];



  constructor(private route: ActivatedRoute, private socket:Socket) {
    this.columnArray = Array(this.colcount).fill(0).map((x, i) => i);
    
    this.ownShipsObsv = this.getShips().subscribe(data => {
    let user = data["user"];
    let event = data["event"];
    let ships = data["ships"];
    let counter = data["counter"];
    console.log(event, user, ":", ships);

    if(this.name == user){

    let  statusHelper = [];
    for(var i=0;i<10;i++){
    ships[counter - 1][i].forEach(function(element){
    statusHelper.push(element.status);
    });
    this.statusZ = statusHelper;
    }

    let statusA = [];
    for(var j=0;j<10;j++){
    statusA.push(this.statusZ[j]);
    }
    this.statusA = statusA;

    let statusB = [];
    for(var j=10;j<20;j++){
    statusB.push(this.statusZ[j]);
    }
    this.statusB = statusB;
    
    let statusC = [];
    for(var j=20;j<30;j++){
    statusC.push(this.statusZ[j]);
    }
    this.statusC = statusC;
    
    let statusD = [];
    for(var j=30;j<40;j++){
    statusD.push(this.statusZ[j]);
    }
    this.statusD = statusD;
    
    let statusE = [];
    for(var j=40;j<50;j++){
    statusE.push(this.statusZ[j]);
    }
    this.statusE = statusE;
    
    let statusF = [];
    for(var j=50;j<60;j++){
    statusF.push(this.statusZ[j]);
    }
    this.statusF = statusF;
    
    let statusG = [];
    for(var j=60;j<70;j++){
    statusG.push(this.statusZ[j]);
    }
    this.statusG = statusG;

    let statusH = [];
    for(var j=70;j<80;j++){
    statusH.push(this.statusZ[j]);
    }
    this.statusH = statusH;

    let statusI = [];
    for(var j=80;j<90;j++){
    statusI.push(this.statusZ[j]);
    }
    this.statusI = statusI;

    let statusJ = [];
    for(var j=90;j<100;j++){
    statusJ.push(this.statusZ[j]);
    }
    this.statusJ = statusJ;
    
    }
    
    });

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params["params"].name;
      this.room = params["params"].id;
    });
    this.socket.emit("ready", {
        name: this.name,
        room: this.room
      });
  }

ngOnDestroy(){
    this.ownShipsObsv.unsubscribe();
  }

getShips() {
    let observable = new Observable(observer => {
      this.socket.on("ships", data => {
        observer.next(data);
      });
    });
    return observable;
  }


}
