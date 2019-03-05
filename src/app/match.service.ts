import { Injectable } from '@angular/core';
import { Match } from './match';
import { MATCHROOMS } from './match-rooms';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor() { }

getMatches(): Observable<Match[]> {
  return of(MATCHROOMS);
}

}
