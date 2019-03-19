import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { Socket } from "ngx-socket-io";
import { Observable } from "rxjs";
import { RoomService } from '../room.service';
import { Room } from '../room';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
    name: String = '';
    selectedMatch: Room;
    matchObserv;
    matches: Room[];
    show : Boolean = false;
    classes = {};
    usersConn: number;


    ngOnInit() {
      this.getMatch();
      this.socket.emit('lobby');
    }

constructor(private roomService:RoomService, private router: Router, private socket:Socket) {
    this.name = '';
 }

getMatch(): void {
  this.matchObserv = this.roomService.getMatches().subscribe((data) =>{
    this.matches = data as Room[]; 
  })
}

navigate(){
  this.router.navigate(["/battle", this.selectedMatch.id, this.name])
}
 
onSelect(match: Room): void {
  this.selectedMatch = match;
  this.show = true;
}

showMatches(match: Room) : Boolean {
  if(this.name === ''){  this.show = false; this.selectedMatch=match; return false;}
  else{return true;}
}




}
