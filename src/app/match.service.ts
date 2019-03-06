import { Injectable } from '@angular/core';
import { Match } from './match';
import { Socket } from 'ngx-socket-io';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class MatchService {

  MATCHROOMS: Match[] = [
    { id: 1, name: 'ʀᴏᴏᴍ: 𝕯𝖊𝖘𝖙𝖗𝖚𝖈𝖙𝖎𝖔𝖓', users: []},
    { id: 2, name: 'ʀᴏᴏᴍ: 𝕻𝖆𝖎𝖓', users: [] },
    { id: 3, name: 'ʀᴏᴏᴍ: 𝕾𝖔𝖗𝖗𝖔𝖜', users: [] },
    { id: 4, name: 'ʀᴏᴏᴍ: 𝕯𝖊𝖛𝖆𝖘𝖙𝖆𝖙𝖎𝖔𝖓', users: [] },
    { id: 5, name: 'ʀᴏᴏᴍ: 𝕯𝖊𝖆𝖙𝖍', users: [] },
    { id: 6, name: 'ʀᴏᴏᴍ: 𝕰𝖓𝖉', users: [] },
  ];

  constructor(private socket:Socket) { }

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

}
