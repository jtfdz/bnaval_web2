import { Component, OnInit, Injectable, NgModule } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Socket } from "ngx-socket-io";
import { MatchService } from '../match.service';
import { BrowserGetTestability } from '@angular/platform-browser/src/browser/testability';
import { TestBedViewEngine } from '@angular/core/testing/src/test_bed';


@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  userObsv;
  users = [];

  name;
  room;
    

  constructor(private route: ActivatedRoute, private socket: Socket,
    private matchService: MatchService) {

    this.userObsv = this.getUsers().subscribe(data => {
      console.log(data);
      
      this.users = data["users"]
      console.log(this.users);
      let user = data["name"];
      if (data["event"] === "left") {
        console.log(`${user} left`);
      } else {
        console.log(`${user} joined`);
      }
      
      if(this.users.length == 2){
        this.begin();
      }

    });
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params["params"].name;
      this.room = params["params"].id;
      this.socket.connect();
      this.socket.emit("open-room", {
        name: this.name,
        room: this.room
      });
    });
  }

  ngOnDestroy(){
    this.userObsv.unsubscribe();
  }

  getUsers() {
    let observable = new Observable(observer => {
      this.socket.on("in-game", data => {
        observer.next(data);
      });
    });
    return observable;
  }

  begin(){
    console.log("match begins!");
  }

 }



