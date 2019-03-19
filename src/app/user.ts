import { Cell } from './cell';

export class User {
    name: string;
    room: number;
    ships: Cell[];
    turn: boolean;
}
