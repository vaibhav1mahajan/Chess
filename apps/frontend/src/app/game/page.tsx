'use client'
import ChessBoard from "@/components/ChessBoard"
import { useSocket } from "@/hooks/useSocket"
import { useEffect, useState } from "react";
import { GameResult, GameStatus, timerValue } from '@repo/common'
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Cookies from "js-cookie";
import { Chess, Move } from "chess.js";
import { initSounds, playOpponentMoveSound } from "@/lib/sound";




const page = () => {
  const socket = useSocket();
  const [chess,] = useState(new Chess());
  const [board, setBoard] = useState(chess.board());
  const [startingTime, setStartingTime] = useState<timerValue>(timerValue.TEN_MIN);
  const [colour, setColour] = useState('w')
  const [username, setUsername] = useState<string | undefined>(Cookies.get('username'));
  const [fen, setFen] = useState<string>('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
  const [moves, setMoves] = useState<Move[] | []>([]);
  const [whitePlayerTime, setWhitePlayerTime] = useState<number>(10 * 60 * 1000)
  const [blackPlayerTime, setBlackPlayerTime] = useState<number>(10 * 60 * 1000)
  const [result, setResult] = useState<GameResult | undefined>();
  const [gameId, setGameId] = useState('');
  const [gameStarted, setIsGameStarted] = useState(false);




  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data)
      if (message.type === GameStatus.INIT_GAME) {
        const { gameId, whitePlayer, blackPlayer, timerValue, move } = message.payload;
        setColour(whitePlayer === username ? 'w' : 'b')
        setStartingTime(timerValue as timerValue)
        setMoves(move);
        setGameId(gameId);
        setIsGameStarted(true);
      } else if (message.type === GameStatus.MOVE) {
        const { move, remaingTime } = message.payload;
        chess.move(move);
        // play sound
        initSounds();
        playOpponentMoveSound();
        setBoard(chess.board());
        setMoves((moves) => [...moves, move]);
        setBlackPlayerTime(remaingTime.player2);
        setWhitePlayerTime(remaingTime.player1);
        console.log(move)

      } else if (message.type === GameStatus.GAME_ENDED) {
        const payload = message.payload;
        setResult(payload.result)
      }
    }

  }, [socket])

  if (!socket) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-white text-3xl font-bold">Connecting to server ...</h1>
      </div>
    )
  };

  return (
    <div className="h-screen w-screen bg-zinc-800">
      <div className="container mx-auto h-full">
        <div className="flex h-full ">
          <div className="xl:w-1/2 flex flex-col xl:flex-row xl:justify-center h-full items-center  w-full">
            {/* <div className="w-[700px] h-[700px] bg-white"></div> */}
            <div className=''>

            </div>
            <ChessBoard gameId={gameId} socket={socket} chess={chess} board={board} setBoard={setBoard} colour={colour} setColour={setColour} whitePlayerTime={whitePlayerTime} blackPlayerTime={blackPlayerTime} />
          </div>
          <div className="xl:w-1/2 flex gap-4 justify-center items-center">
            <DropdownMenu>
              <DropdownMenuTrigger>{startingTime === timerValue.TEN_MIN ? '10' : startingTime === timerValue.FIFTEEN_MIN ? '15' : '30'} min</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setStartingTime(timerValue.TEN_MIN)}>10 min</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStartingTime(timerValue.FIFTEEN_MIN)}>15 min</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStartingTime(timerValue.THIRTY_MIN)}>30 min</DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>

            {!gameStarted && <Button onClick={() => {
              socket.send(JSON.stringify({
                type: GameStatus.INIT_GAME,
                payload: {
                  timerValue
                }
              }))
            }}>Start a Game</Button>}
            {gameStarted && <div>Game has begun, you are {colour} player</div>}


          </div>
        </div>

      </div>

    </div>
  )
}

export default page

