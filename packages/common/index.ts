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
    REMOVE_IS_PENDING = 'remove_is_pending_user'
}

export enum timerValue {
    TEN_MIN,
    FIFTEEN_MIN,
    THIRTY_MIN
}


// if player doesn't make move in 5 minutes, he will lose
export const TIMEOUT = 1000*60*5; // 5 minutes


export type message = {
    type: GameStatus.INIT_GAME,
    payload:{
        timerValue: timerValue;
    }
} | {
    type:GameStatus.GAME_ALERT,
    payload:{
        message: string;
    }
} | {
    type:GameStatus.GAME_ADDED,
    payload:{
        message:string
    }
} | {
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
}


export enum GameResult {
    DRAW = 'draw',
    WHITE_WON = 'white_won',
    BLACK_WON = 'black_won',
}