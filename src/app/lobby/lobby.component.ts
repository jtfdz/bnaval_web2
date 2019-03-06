import {Component, Input, OnInit} from '@angular/core';
import { Match } from '../match';
import { MatchService } from '../match.service';
import {Router} from '@angular/router';

import { Socket } from "ngx-socket-io";
import { Observable } from "rxjs";

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
    name: String = '';
    selectedMatch: Match;
    matches: Match[];
    show : Boolean = false;

    usersConn: number;


    ngOnInit() {
    this.getMatch();

    }

constructor(private matchService: MatchService, private router: Router) {
    this.name = '';
 }

getMatch(): void {
  this.matches = this.matchService.getMatches()
}

navigate(){
  this.router.navigate(["/battle", this.selectedMatch.id, this.name])
}

onSelect(match: Match): void {
  this.selectedMatch = match;
  this.show = true;
}

showMatches(match: Match) : Boolean {
  if(this.name === ''){  this.show = false; this.selectedMatch=match; return false;}
  else{return true;}
}




}
