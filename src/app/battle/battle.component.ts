import { Component, OnInit, Injectable, NgModule } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Socket } from "ngx-socket-io";


@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  userObsv;
  users = [];

  turnsObsv;

  name;
  room;
 
  showName;
  toastMsg: string;


  constructor(private route: ActivatedRoute, private socket: Socket) {

    this.userObsv = this.getUsers().subscribe(data => {
      let x=3500;
      console.log(data);
      this.users = data["users"];
      let user = data["name"];
      if (data["event"] === "left") {
        console.log(`${user} left`);
        this.toastMsg = `${user} left.`;
      } else {
        if (data["event"] === "joined") {
        let size = data["room"].users.length;
        if(size == 1){
        this.toastMsg = `waiting for a partner...`;
        x = 500000;
        }
        else{
        console.log(`${user} joined`);
        this.toastMsg = `${user} joined!!!!!!`;
        }
        }
      }

      this.showName = "show";
      setTimeout(() => {
        this.showName = "";
      }, x);
    });

     this.turnsObsv = this.getUsers().subscribe(data => {
      
    });

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params["params"].name;
      this.room = params["params"].id;
      this.socket.connect();
      this.socket.emit("open-room", {
        name: this.name,
        room: this.room,
        ships: []
      });

    });
  }

  ngOnDestroy(){
    this.userObsv.unsubscribe();
    this.turnsObsv.unsubscribe();
  }

  getUsers() {
    let observable = new Observable(observer => {
      this.socket.on("in-game", data => {
        observer.next(data);
      });
    });
    return observable;
  }

  getTurns() {
    let observable = new Observable(observer => {
      this.socket.on("turns", data => {
        observer.next(data);
      });
    });
    return observable;
  }


 }



