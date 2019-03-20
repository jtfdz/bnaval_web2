import { Component, OnInit, Injectable, NgModule } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Socket } from "ngx-socket-io";
import { Observable } from "rxjs";

@Component({
  selector: 'app-enemy-board',
  templateUrl: './enemy-board.component.html',
  styleUrls: ['./enemy-board.component.css']
})
export class EnemyBoardComponent implements OnInit {

  colcount = 10;
  columnArray: number[];
  name;
  room;
  enemyShipsObsv;
  turnsObsv;
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
  elementZ = [];
  elementZ2 = [];



  constructor(private route: ActivatedRoute, private socket:Socket) {
    this.columnArray = Array(this.colcount).fill(0).map((x, i) => i);
    
    this.enemyShipsObsv = this.getShips().subscribe(data => {
    let user = data["user"];
    let event = data["event"];
    let ships = data["ships"];
    let lastuser = data["pop"];


    if(ships.length == 2){

    let x = 1;
    if(lastuser == this.name){x=0;}

    let  statusHelper = [];
    for(var i=0;i<10;i++){
    ships[x][i].forEach(function(element){
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

    this.turnsObsv = this.getTurns().subscribe(data => {

    let user = data["user"];
    let grant = data["grant"];
    let coordin = data["coord"];
    let users = data["users"];
    let cur = data["cur"];

    
    
   let x = 0;
   if(cur == 0){x=1;}

   
   let union = users[x].ships;

   console.log(union[x]);

    let  elementHelper = [];
    for(var i=0;i<10;i++){
    union[0][i].forEach(function(element){
    elementHelper.push(element);
    });
    this.elementZ = elementHelper;
    }

    let  elementHelper2 = [];
    for(var i=0;i<10;i++){
    union[0][i].forEach(function(element){
    elementHelper2.push(element.coord);
    });
    this.elementZ2 = elementHelper2;
    }
    console.log(this.elementZ2);
    for(var t=0;t<101;t++){
    if(this.elementZ2[t] == coordin){
    console.log(this.elementZ2[t], coordin);
    }
    }




    });
    }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params["params"].name;
      this.room = params["params"].id;
    });
  }

ngOnDestroy(){
    this.enemyShipsObsv.unsubscribe();
    this.turnsObsv.unsubscribe();
  }

getShips() {
    let observable = new Observable(observer => {
      this.socket.on("ships", data => {
        observer.next(data);
      });
    });
    return observable;
  }

getTurns() {
    let observable = new Observable(observer => {
      this.socket.on("grant", data => {
        observer.next(data);
      });
    });
    return observable;
  }


}
