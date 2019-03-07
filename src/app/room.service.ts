import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './room';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  

  constructor(private socket:Socket) { }

  getMatches(){
    return new Observable((observer)=>{
      this.socket.on('in-lobby', (data) =>{
        observer.next(data.rooms);
      });
    })
  }
/*
  getMatches(){
    console.log(this.MATCHROOMS.filter(match => match.users.length < 2))
    return this.MATCHROOMS.filter(match => match.users.length < 2);
  }

  addUserToMatch(user:User){
    this.MATCHROOMS.find((match) => match.id === +user.room).users.push(user);
    console.log(this.MATCHROOMS);
  }

  removeUserFromMatch(user:User){
    let room = this.MATCHROOMS.find((match) => match.id === +user.room);
    let index = room.users.findIndex((usr)=> user.name === usr.name);
    room.users.splice(index, 1);
    console.log(this.MATCHROOMS);
  }
  */
}
