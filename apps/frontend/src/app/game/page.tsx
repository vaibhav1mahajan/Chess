// 'use client'
// import ChessBoard from "@/components/ChessBoard"
// import { useSocket } from "@/hooks/useSocket"
// import { useEffect, useRef, useState } from "react";
// import {GameResult, GameStatus , timerValue} from '@repo/common'
// import { Button } from "@/components/ui/button";
// import Cookies from "js-cookie";
// import { Chess, Move } from "chess.js";




// const page = () => {
//   const socket = useSocket();
//   const [chess, ] = useState(new Chess());
//   const [board, setBoard] = useState(chess.board());
//   const [startingTime,setStartingTime] = useState<timerValue>(timerValue.TEN_MIN);
//   const [colour,setColour] = useState('w')
//   const [username,setUsername] = useState<string | undefined>(Cookies.get('username'));
//   const [fen,setFen] = useState<string>('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
//   const [moves,setMoves] = useState<Move[] | []>([]);
//   const [result,setResult] = useState<GameResult | undefined>();
//   const [gameId,setGameId] = useState('');
//   const [gameStarted,setIsGameStarted] = useState(false);
//   const [opponentName , setOpponentName] = useState('Guest');
  
//   const initialMinutes = timerValue.TEN_MIN ? 10 : timerValue.FIFTEEN_MIN ? 15 : 30;
//   const initialSeconds = 0;
  
//   const [timeLeft, setTimeLeft] = useState( initialMinutes* 60 + initialSeconds);
//   const [blackPlayerTime,setBlackPlayerTime] = useState(initialMinutes*60 + initialSeconds)
//   const [whitePlayerTime,setWhitePlayerTime] = useState(initialMinutes*60 + initialSeconds)




//   const [currentTurn, setCurrentTurn] = useState<'w' | 'b'>('w'); // track whose move
// const intervalRef = useRef<NodeJS.Timeout | null>(null);

// useEffect(() => {
//   if (!gameStarted) return;

//   // Clear previous interval
//   if (intervalRef.current) clearInterval(intervalRef.current);

//   // Don't start if game is over
//   if (result) return;

//   // If it's not this player's turn, don't start timer
//   const activeColor = chess.turn(); // 'w' or 'b'
//   setCurrentTurn(activeColor);

//   // Start interval for the current player's clock
//   intervalRef.current = setInterval(() => {
//     if (activeColor === 'w') {
//       setWhitePlayerTime((prev) => Math.max(prev - 1, 0));
//     } else {
//       setBlackPlayerTime((prev) => Math.max(prev - 1, 0));
//     }
//   }, 1000);

//   return () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//   };
// }, [gameStarted, moves]);

// // Optional: Timer display utility
// const formatTime = (seconds: number) => {
//   const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
//   const secs = (seconds % 60).toString().padStart(2, '0');
//   return `${mins}:${secs}`;
// };

  

//   useEffect(()=>{
//     if(!socket) return;

//     socket.onmessage = (event)=>{
//       const message = JSON.parse(event.data)
//       if(message.type === GameStatus.INIT_GAME){
//           const {gameId , whitePlayer, blackPlayer, timerValue, move} = message.payload; 
//           setColour(whitePlayer === username ? 'w' : 'b')
//           setStartingTime(timerValue as timerValue) 
//           setMoves(move);
//           setGameId(gameId);
//           setIsGameStarted(true);
//           setOpponentName(whitePlayer === username ? blackPlayer : whitePlayer)
//       } else if(message.type === GameStatus.MOVE){
//           const {move , remaingTime} = message.payload;
//           chess.move(move);
//           setBoard(chess.board());
//           setMoves((moves)=>[...moves,move]);
//           // setBlackPlayerTime(remaingTime.player2);
//           // setWhitePlayerTime(remaingTime.player1);
//           console.log(move)

//       } else if(message.type === GameStatus.GAME_ENDED){
//         const payload = message.payload;
//         setResult(payload.result)
//       }
//     }

//   },[socket])

//   if (!socket){
//     return(
//       <div className="flex justify-center items-center h-screen">
//         <h1 className="text-white text-3xl font-bold">Connecting to server ...</h1>
//       </div>
//     )
//   };

//   return (
//     <div className="h-screen w-screen bg-zinc-800">
//       <div className="container mx-auto h-full">
//       <div className="flex h-full ">
//         <div className="xl:w-1/2 flex flex-col xl:flex-row xl:justify-center h-full items-center  w-full"> 
           
//           <div className='flex flex-col gap-2 mt-10'> 
    
//             <div className="w-full bg-gray-500 p-2 flex justify-between items-center">
//               <h1>{opponentName}</h1>
//               <div className="text-4xl">
//               ⏳ {formatTime(colour === 'w' ? blackPlayerTime : whitePlayerTime)}
//       </div> 
//               </div>
            
            
//             <ChessBoard gameId = {gameId} socket={socket} chess={chess} board = {board} setBoard={setBoard} colour = {colour} setColour={setColour} whitePlayerTime = {whitePlayerTime} blackPlayerTime={blackPlayerTime}/>
//             <div className="w-full bg-gray-500 p-2 flex justify-between items-center">
//               <h1>{username}</h1>
//               <div className="text-4xl">
//               ⏳ {formatTime(colour === 'w' ? blackPlayerTime : whitePlayerTime)}
//       </div> 
//               </div>
//           </div>
          
//         </div>
//         <div className="xl:w-1/2 flex flex-col gap-4 justify-center items-center">
//         <div className="flex gap-3">
//           <Button onClick={()=>{
//             setStartingTime(timerValue.TEN_MIN)
//           }}>10min</Button>
//           <Button onClick={()=>{
//             setStartingTime(timerValue.FIFTEEN_MIN)
//           }}>15min</Button>
//           <Button onClick={()=>{
//             setStartingTime(timerValue.THIRTY_MIN)
//           }}>30min</Button>

//         </div>

//           {!gameStarted && <Button onClick={()=> {
//             socket.send(JSON.stringify({
//               type:GameStatus.INIT_GAME,
//               payload:{
//                 timerValue
//               }
//             }))
//           }}>Start a Game</Button>}
//           {gameStarted && <div>Game has begun, you are {colour} player</div>}


//         </div>
//       </div>

//       </div>
      
//     </div>
//   )
// }

// export default page


'use client'

import ChessBoard from "@/components/ChessBoard"
import { useSocket } from "@/hooks/useSocket"
import { useEffect, useRef, useState } from "react";
import { GameResult, GameStatus, timerValue } from '@repo/common'
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { Chess, Move } from "chess.js";

const Page = () => {
  const socket = useSocket();
  const [chess] = useState(new Chess());
  const [board, setBoard] = useState(chess.board());

  const [startingTime, setStartingTime] = useState<timerValue>(timerValue.TEN_MIN);
  const [username, setUsername] = useState<string | undefined>(Cookies.get('username'));
  const [colour, setColour] = useState<'w' | 'b'>('w');
  const [fen, setFen] = useState(chess.fen());
  const [moves, setMoves] = useState<Move[] | []>([]);
  const [result, setResult] = useState<GameResult | undefined>();
  const [gameId, setGameId] = useState('');
  const [gameStarted, setIsGameStarted] = useState(false);
  const [opponentName, setOpponentName] = useState('Guest');

  // Setup timer values
  const timeInSeconds = {
    [timerValue.TEN_MIN]: 600,
    [timerValue.FIFTEEN_MIN]: 900,
    [timerValue.THIRTY_MIN]: 1800
  }[startingTime];

  const [whitePlayerTime, setWhitePlayerTime] = useState(timeInSeconds);
  const [blackPlayerTime, setBlackPlayerTime] = useState(timeInSeconds);
  const [currentTurn, setCurrentTurn] = useState<'w' | 'b'>('w');

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 🔁 Handle ticking timer for current player only
  useEffect(() => {
    if (!gameStarted || result) return;

    const turn = chess.turn(); // 'w' or 'b'
    setCurrentTurn(turn);

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (turn === 'w') {
        setWhitePlayerTime(prev => Math.max(prev - 1, 0));
      } else {
        setBlackPlayerTime(prev => Math.max(prev - 1, 0));
      }
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [moves, gameStarted, result,chess.turn()]);

  // 🕹 Format time as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  // 📡 Handle WebSocket events
  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);

      switch (message.type) {
        case GameStatus.INIT_GAME:
          const { gameId, whitePlayer, blackPlayer, timerValue, move } = message.payload;
          setColour(whitePlayer === username ? 'w' : 'b');
          setOpponentName(whitePlayer === username ? blackPlayer : whitePlayer);
          setGameId(gameId);
          setStartingTime(timerValue);
          setMoves(move);
          setWhitePlayerTime(timeInSeconds);
          setBlackPlayerTime(timeInSeconds);
          setIsGameStarted(true);
          break;

        case GameStatus.MOVE:
          const { move: newMove } = message.payload;
          chess.move(newMove);
          setBoard(chess.board());
          setFen(chess.fen());
          setMoves((prev) => [...prev, newMove]);
          break;

        case GameStatus.GAME_ENDED:
          setResult(message.payload.result);
          if (intervalRef.current) clearInterval(intervalRef.current);
          break;
      }
    }
  }, [socket]);

  if (!socket) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-white text-3xl font-bold">Connecting to server ...</h1>
      </div>
    )
  }

  return (
    <div className="h-screen w-screen bg-zinc-800">
      <div className="container mx-auto h-full">
        <div className="flex h-full">
          {/* Chess Board and Timers */}
          <div className="xl:w-1/2 flex flex-col xl:flex-row xl:justify-center h-full items-center w-full">
            <div className="flex flex-col gap-2 mt-10">
              {/* Opponent Timer */}
              <div className="w-full bg-gray-500 p-2 flex justify-between items-center">
                <h1>{opponentName}</h1>
                <div className="text-4xl">
                  ⏳ {colour === 'w' ? formatTime(blackPlayerTime) : formatTime(whitePlayerTime)}
                </div>
              </div>

              {/* Board */}
              <ChessBoard
                gameId={gameId}
                socket={socket}
                chess={chess}
                board={board}
                setBoard={setBoard}
                colour={colour}
                setColour={setColour}
                whitePlayerTime={whitePlayerTime}
                blackPlayerTime={blackPlayerTime}
              />

              {/* Your Timer */}
              <div className="w-full bg-gray-500 p-2 flex justify-between items-center">
                <h1>{username}</h1>
                <div className="text-4xl">
                  ⏳ {colour === 'w' ? formatTime(whitePlayerTime) : formatTime(blackPlayerTime)}
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="xl:w-1/2 flex flex-col gap-4 justify-center items-center">
            <div className="flex gap-3">
              <Button onClick={() => setStartingTime(timerValue.TEN_MIN)}>10min</Button>
              <Button onClick={() => setStartingTime(timerValue.FIFTEEN_MIN)}>15min</Button>
              <Button onClick={() => setStartingTime(timerValue.THIRTY_MIN)}>30min</Button>
            </div>

            {!gameStarted && (
              <Button onClick={() => {
                socket.send(JSON.stringify({
                  type: GameStatus.INIT_GAME,
                  payload: {
                    timerValue: startingTime,
                  }
                }));
              }}>
                Start a Game
              </Button>
            )}

            {gameStarted && (
              <div>Game has begun, you are {colour} player</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
