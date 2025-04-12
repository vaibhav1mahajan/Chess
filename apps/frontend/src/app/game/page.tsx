// 'use client'

// import ChessBoard from "@/components/ChessBoard"
// import { useSocket } from "@/hooks/useSocket"
// import { useEffect, useRef, useState } from "react";
// import { GameResult, GameStatus, timerValue } from '@repo/common'
// import { Button } from "@/components/ui/button";
// import Cookies from "js-cookie";
// import { Chess, Move } from "chess.js";

// const Page = () => {
//   const socket = useSocket();
//   const [chess] = useState(new Chess());
//   const [board, setBoard] = useState(chess.board());

//   const [startingTime, setStartingTime] = useState<timerValue>(timerValue.TEN_MIN);
//   const [username, setUsername] = useState<string | undefined>(Cookies.get('username'));
//   const [colour, setColour] = useState<'w' | 'b'>('w');
//   const [fen, setFen] = useState(chess.fen());
//   const [moves, setMoves] = useState<Move[] | []>([]);
//   const [result, setResult] = useState<GameResult | undefined>();
//   const [gameId, setGameId] = useState('');
//   const [gameStarted, setIsGameStarted] = useState(false);
//   const [opponentName, setOpponentName] = useState('Guest');

//   // Setup timer values
//   const timeInSeconds = {
//     [timerValue.TEN_MIN]: 600,
//     [timerValue.FIFTEEN_MIN]: 900,
//     [timerValue.THIRTY_MIN]: 1800
//   }[startingTime];

//   const [whitePlayerTime, setWhitePlayerTime] = useState(timeInSeconds);
//   const [blackPlayerTime, setBlackPlayerTime] = useState(timeInSeconds);
//   const [currentTurn, setCurrentTurn] = useState<'w' | 'b'>('w');

//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   // 🔁 Handle ticking timer for current player only
//   useEffect(() => {
//     if (!gameStarted || result) return;

//     const turn = chess.turn(); // 'w' or 'b'
//     setCurrentTurn(turn);

//     if (intervalRef.current) clearInterval(intervalRef.current);

//     intervalRef.current = setInterval(() => {
//       if (turn === 'w') {
//         setWhitePlayerTime(prev => Math.max(prev - 1, 0));
//       } else {
//         setBlackPlayerTime(prev => Math.max(prev - 1, 0));
//       }
//     }, 1000);

//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//   }, [moves, gameStarted, result,chess.turn()]);

//   // 🕹 Format time as mm:ss
//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
//     const secs = (seconds % 60).toString().padStart(2, '0');
//     return `${mins}:${secs}`;
//   };

//   // 📡 Handle WebSocket events
//   useEffect(() => {
//     if (!socket) return;

//     socket.onmessage = (event) => {
//       const message = JSON.parse(event.data);

//       switch (message.type) {
//         case GameStatus.INIT_GAME:
//           const { gameId, whitePlayer, blackPlayer, timerValue, move } = message.payload;
//           setColour(whitePlayer === username ? 'w' : 'b');
//           setOpponentName(whitePlayer === username ? blackPlayer : whitePlayer);
//           setGameId(gameId);
//           setStartingTime(timerValue);
//           setMoves(move);
//           setWhitePlayerTime(timeInSeconds);
//           setBlackPlayerTime(timeInSeconds);
//           setIsGameStarted(true);
//           break;

//         case GameStatus.MOVE:
//           const { move: newMove } = message.payload;
//           chess.move(newMove);
//           setBoard(chess.board());
//           setFen(chess.fen());
//           setMoves((prev) => [...prev, newMove]);
//           break;

//         case GameStatus.GAME_ENDED:
//           setResult(message.payload.result);
//           if (intervalRef.current) clearInterval(intervalRef.current);
//           break;
//       }
//     }
//   }, [socket]);

//   if (!socket) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <h1 className="text-white text-3xl font-bold">Connecting to server ...</h1>
//       </div>
//     )
//   }

//   return (
//     <div className="h-screen w-screen bg-zinc-800">
//       <div className="container mx-auto h-full">
//         <div className="flex xl:h-full flex-col gap-4 xl:flex-row">
//           {/* Chess Board and Timers */}
//           <div className="xl:w-1/2 flex flex-col xl:flex-row xl:justify-center h-full items-center w-full">
//             <div className="flex flex-col gap-2 mt-10">
//               {/* Opponent Timer */}
//               <div className="w-full bg-gray-500 p-2 flex justify-between items-center">
//                 <h1>{opponentName}</h1>
//                 <div className="text-4xl">
//                   ⏳ {colour === 'w' ? formatTime(blackPlayerTime) : formatTime(whitePlayerTime)}
//                 </div>
//               </div>

//               {/* Board */}
//               <ChessBoard
//                 gameId={gameId}
//                 socket={socket}
//                 chess={chess}
//                 board={board}
//                 setBoard={setBoard}
//                 colour={colour}
//                 setColour={setColour}
//                 whitePlayerTime={whitePlayerTime}
//                 blackPlayerTime={blackPlayerTime}
//                 gameStarted = {gameStarted}
//               />

//               {/* Your Timer */}
//               <div className="w-full bg-gray-500 p-2 flex justify-between items-center">
//                 <h1>{username}</h1>
//                 <div className="text-4xl">
//                   ⏳ {colour === 'w' ? formatTime(whitePlayerTime) : formatTime(blackPlayerTime)}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Controls */}
//           <div className="xl:w-1/2 flex flex-col gap-4 justify-center items-center ">
//             <div className="flex gap-3">
//               <Button onClick={() => setStartingTime(timerValue.TEN_MIN)} className={` border-4  ${startingTime === timerValue.TEN_MIN && 'border-green-500'}`}>10min</Button>
//               <Button onClick={() => setStartingTime(timerValue.FIFTEEN_MIN)} className={` border-4  ${startingTime === timerValue.FIFTEEN_MIN && 'border-green-500'}`}>15min</Button>
//               <Button onClick={() => setStartingTime(timerValue.THIRTY_MIN)} className={` border-4  ${startingTime === timerValue.THIRTY_MIN && 'border-green-500'}`}>30min</Button>
//             </div>

//             {!gameStarted && (
//               <Button onClick={() => {
//                 socket.send(JSON.stringify({
//                   type: GameStatus.INIT_GAME,
//                   payload: {
//                     timerValue: startingTime,
//                   }
//                 }));
//               }}>
//                 Start a Game
//               </Button>
//             )}

//             {gameStarted && (
//               <div>Game has begun, you are {colour} player</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Page;


'use client'

import ChessBoard from "@/components/ChessBoard"
import { useSocket } from "@/hooks/useSocket"
import { useEffect, useRef, useState } from "react";
import { GameResult, GameStatus, timerValue } from '@repo/common'
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { Chess, Move } from "chess.js";
import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {
  const socket = useSocket();
  const router = useRouter();
  const searchParams = useSearchParams();
  const gameIdFromUrl = searchParams.get('gameId');

  const [chess] = useState(new Chess());
  const [board, setBoard] = useState(chess.board());

  const [startingTime, setStartingTime] = useState<timerValue>(timerValue.TEN_MIN);
  const [username, setUsername] = useState<string | undefined>(Cookies.get('username'));
  const [colour, setColour] = useState<'w' | 'b'>('w');
  const [fen, setFen] = useState(chess.fen());
  const [moves, setMoves] = useState<Move[] | []>([]);
  const [result, setResult] = useState<GameResult | undefined>();
  const [gameId, setGameId] = useState(gameIdFromUrl ?? '');
  const [gameStarted, setIsGameStarted] = useState(false);
  const [opponentName, setOpponentName] = useState('Guest');

  const timeInSeconds = {
    [timerValue.TEN_MIN]: 600,
    [timerValue.FIFTEEN_MIN]: 900,
    [timerValue.THIRTY_MIN]: 1800
  }[startingTime];

  const [whitePlayerTime, setWhitePlayerTime] = useState(timeInSeconds);
  const [blackPlayerTime, setBlackPlayerTime] = useState(timeInSeconds);
  const [currentTurn, setCurrentTurn] = useState<'w' | 'b'>('w');

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // ⏳ Timer logic
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
  }, [moves, gameStarted, result, chess.turn()]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  // 🧠 Socket logic
  useEffect(() => {
    if (!socket) return;

    socket.onopen = () => {
      // Rejoin game if gameId exists in URL
      if (gameIdFromUrl) {
        socket.send(JSON.stringify({
          type: GameStatus.RESTORE_GAME,
          payload: { gameId: gameIdFromUrl }
        }));
      }
    }

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

          // 👇 Update URL
          router.replace(`/game/${gameId}`);
          break;

        case GameStatus.RESTORE_GAME:
          const { fen, gameId: restoredGameId, whitePlayer: w, blackPlayer: b, move: pastMoves, timerValue: tv } = message.payload;
          chess.load(fen);
          setBoard(chess.board());
          setFen(fen);
          setGameId(restoredGameId);
          setColour(w === username ? 'w' : 'b');
          setOpponentName(w === username ? b : w);
          setMoves(pastMoves ?? []);
          setIsGameStarted(true);
          setStartingTime(tv);
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
    );
  }

  return (
    <div className="h-screen w-screen bg-zinc-800">
      <div className="container mx-auto h-full">
        <div className="flex xl:h-full flex-col gap-4 xl:flex-row">
          <div className="xl:w-1/2 flex flex-col xl:flex-row xl:justify-center h-full items-center w-full">
            <div className="flex flex-col gap-2 mt-10">
              <div className="w-full bg-gray-500 p-2 flex justify-between items-center">
                <h1>{opponentName}</h1>
                <div className="text-4xl">
                  ⏳ {colour === 'w' ? formatTime(blackPlayerTime) : formatTime(whitePlayerTime)}
                </div>
              </div>

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
                gameStarted={gameStarted}
              />

              <div className="w-full bg-gray-500 p-2 flex justify-between items-center">
                <h1>{username}</h1>
                <div className="text-4xl">
                  ⏳ {colour === 'w' ? formatTime(whitePlayerTime) : formatTime(blackPlayerTime)}
                </div>
              </div>
            </div>
          </div>

          <div className="xl:w-1/2 flex flex-col gap-4 justify-center items-center ">
            <div className="flex gap-3">
              <Button onClick={() => setStartingTime(timerValue.TEN_MIN)} className={` border-4  ${startingTime === timerValue.TEN_MIN && 'border-green-500'}`}>10min</Button>
              <Button onClick={() => setStartingTime(timerValue.FIFTEEN_MIN)} className={` border-4  ${startingTime === timerValue.FIFTEEN_MIN && 'border-green-500'}`}>15min</Button>
              <Button onClick={() => setStartingTime(timerValue.THIRTY_MIN)} className={` border-4  ${startingTime === timerValue.THIRTY_MIN && 'border-green-500'}`}>30min</Button>
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
