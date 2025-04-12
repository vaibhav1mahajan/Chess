import z from 'zod'

export const signupSchema = z.object({
    username:z.string().min(6).max(30),
    password:z.string().min(6).max(15),
})

export const signinSchema = z.object({
    username:z.string().min(6).max(30),
    password:z.string().min(6).max(15)
})




export enum GameStatus {
    INIT_GAME = 'init_game',
    GAME_ADDED = 'game_added',
    GAME_ALERT = 'game_alert',
    MOVE = 'move',
    GAME_ENDED = 'game_ended',
    RESIGN = 'resign',
    TIME_UP = 'time_up',
    REMOVE_IS_PENDING = 'remove_is_pending_user',
    RESTORE_GAME='restore_game'
}

export enum timerValue {
    TEN_MIN,
    FIFTEEN_MIN,
    THIRTY_MIN
}


// if player doesn't make move in 5 minutes, he will lose
export const TIMEOUT = 1000*60*5; // 5 minutes

export type messageSentByServer = {
    type:GameStatus.INIT_GAME,
    payload:{
          gameId:string;
          whitePlayer: string;
          blackPlayer: string,
          timerValue: timerValue,
          currentFen: string,
          move: [],
    }
} | {
    type: GameStatus.GAME_ADDED,
    payload: {
        gameId:string
    }
} | {
    type:GameStatus.GAME_ALERT,
    payload:{
        message:string
    }
} | {
    type: GameStatus.RESTORE_GAME,
            payload: {
              gameId: string,
              whitePlayer: string
              blackPlayer:string,
              currentFen: string,
              color:string,
              remainingTime: {
                player1: number | undefined,
                player2: number | undefined,
              },
              moves: []
            },
} | {
    type: GameStatus.MOVE,
        payload: {
          move :{
            from: string;
            to: string;
          } ,
          remaingTime: {
            player1: number | undefined,
            player2: number | undefined,
          },
        },
} | {
    type: GameStatus.GAME_ENDED,
    payload: {
        gameId: string,
        result:GameResult,
    } & {}
} | {
    type: GameStatus.RESIGN,
    payload:{
        
    }
}


export type messageSentByClient = {
    type: GameStatus.INIT_GAME,
    payload:{
        timerValue: timerValue;
    }
} |  {
    type:GameStatus.MOVE,
    payload:{
        move: {
            from: string;
            to: string;
        },
        gameId: string
    }
} | {
    type:GameStatus.RESIGN,
    payload:{
        gameId:string
    }
} | {
    type: GameStatus.REMOVE_IS_PENDING,
    payload:{
        gameId:string,
        
    }
} | {
    type:GameStatus.RESTORE_GAME,
    payload:{
        gameId:string,
        username:string
    }
}
 

export enum GameResult {
    DRAW = 'draw',
    WHITE_WON = 'white_won',
    BLACK_WON = 'black_won',
}