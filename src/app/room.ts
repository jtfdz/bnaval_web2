import { User } from './user';

export class Room {
    id: number;
    name: String;
    users: User[];
    started: boolean;
    turn: 0;
  }
  