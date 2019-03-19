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


}
