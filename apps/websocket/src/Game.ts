import { timerValue } from "@repo/common";
import  { Chess } from "chess.js";
import { v4 as uuidv4 } from 'uuid';

export class Game {
    gameId : string;
    usernameOfPlayer1 : string;
    usernameOfPlayer2 : string | null;
    board :Chess;
    moveCount : number = 0;
    timerValue : timerValue = timerValue.TEN_MIN;
    timerPlayer1:NodeJS.Timeout | null = null;
    timerPlayer2:NodeJS.Timeout | null = null;


    public constructor( usernameOfPlayer1: string , usernameOfPlayer2: string | null  = null , timerValue: timerValue ) {
        this.gameId = uuidv4();
        this.usernameOfPlayer1 = usernameOfPlayer1;
        this.usernameOfPlayer2 = usernameOfPlayer2;
        this.timerValue = timerValue;
        this.board = new Chess();
    }

    public gameStarted(usernameOfPlayer2:string){
        this.usernameOfPlayer2 = usernameOfPlayer2;

    }
}