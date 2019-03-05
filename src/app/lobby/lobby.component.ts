import {Component, Input, OnInit} from '@angular/core';
import { Match } from '../match';
import { MATCHROOMS } from '../match-rooms';
import { MatchService } from '../match.service';
import {Router} from '@angular/router';

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

ngOnInit() {
this.getMatch();
}

constructor(private matchService: MatchService, private router: Router) {
    this.name = '';
 }

getMatch(): void {
  this.matchService.getMatches()
      .subscribe(matches => this.matches = matches);
}

onSelect(match: Match): void {
  this.selectedMatch = match;
  this.show = true;
}

showMatches() : Boolean {
  if(this.name === ''){  this.show = false; this.selectedMatch !=Match; return false;}
  else{return true;}
}




}
