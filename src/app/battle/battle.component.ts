import { Component, OnInit, Injectable, NgModule } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Socket } from "ngx-socket-io";


@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit,OnDestroy {

    nickname = "";
    room = "";
    users = [];
    toastMsg: string;
    showName;
    usersConn;
    messages = [];

  constructor(private route: ActivatedRoute, private socket: Socket) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.room = params["params"].id;
      this.nickname = params["params"].name;
      this.socket.connect();
    });
  }

   this.usersConn = this.getUsers().subscribe(data => {
      console.log(data);

      this.users = data["users"];

      let user = data["nickname"];
    });


  getUsers() {
    let observable = new Observable(observer => {
      this.socket.on("in-chat", data => {
        observer.next(data);
      });
    });
    return observable;
  }


 }



