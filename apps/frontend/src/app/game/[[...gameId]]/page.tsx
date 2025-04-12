// 'use client'

// import ChessBoard from "@/components/ChessBoard"
// import { useSocket } from "@/hooks/useSocket"
// import { useEffect, useRef, useState } from "react";
// import { GameResult, GameStatus, messageSentByClient, messageSentByServer, timerValue } from '@repo/common'
// import { Button } from "@/components/ui/button";
// import Cookies from "js-cookie";
// import { Chess, Move } from "chess.js";
// import { useRouter, useSearchParams } from "next/navigation";
// import { initSounds, playOpponentMoveSound } from "@/lib/sound";

// const Page = () => {
//   const socket = useSocket();
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const gameIdFromUrl = searchParams.get('gameId');

//   const [chess] = useState(new Chess());
//   const [board, setBoard] = useState(chess.board());
//   const [fen, setFen] = useState(chess.fen());

//   const [startingTime, setStartingTime] = useState<timerValue>(timerValue.TEN_MIN);
//   const [username, setUsername] = useState<string | undefined>(Cookies.get('username'));
//   const [colour, setColour] = useState<'w' | 'b'>('w');
//   const [moves, setMoves] = useState<Move[]>([]);
//   const [result, setResult] = useState<GameResult | null>(null);
//   const [gameId, setGameId] = useState('');
//   const [gameStarted, setIsGameStarted] = useState(false);
//   const [opponentName, setOpponentName] = useState('Guest');
//   const [waitingForOtherPlayer,setWaitingForOtherPlayer] = useState(false);


//   // 🕒 Time setup
//   const timeInSeconds = {
//     [timerValue.TEN_MIN]: 600,
//     [timerValue.FIFTEEN_MIN]: 900,
//     [timerValue.THIRTY_MIN]: 1800
//   }[startingTime];

//   const [whitePlayerTime, setWhitePlayerTime] = useState(timeInSeconds);
//   const [blackPlayerTime, setBlackPlayerTime] = useState(timeInSeconds);
//   const [currentTurn, setCurrentTurn] = useState<'w' | 'b'>('w');
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   // ⏳ Ticking timer
//   useEffect(() => {
//     if(result){
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     }
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
//   }, [moves, gameStarted, result,chess.turn()]); // ❌ removed chess here
  

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
//     const secs = (seconds % 60).toString().padStart(2, '0');
//     return `${mins}:${secs}`;
//   };

//   // 🔁 Handle restore on refresh/reconnect
//   useEffect(() => {
//     if (!socket || !gameIdFromUrl) return;

//     const restoreGame = () => {
//       socket.send(JSON.stringify({
//         type: GameStatus.RESTORE_GAME,
//         payload: { gameId: gameIdFromUrl, username }
//       }));
//     };

//     if (socket.readyState === WebSocket.OPEN) {
//       restoreGame();
//     } else {
//       socket.addEventListener('open', restoreGame);
//       return () => socket.removeEventListener('open', restoreGame);
//     }
//   }, [socket, gameIdFromUrl]);

//   // 📡 Handle WebSocket events
//   useEffect(() => {
//     if (!socket) return;

//     socket.onmessage = (event) => {
//       const message:messageSentByServer = JSON.parse(event.data);

//       switch (message.type) {

//         case GameStatus.GAME_ADDED:{
//           const {gameId} = message.payload
//           setWaitingForOtherPlayer(true);
//           break;
//         }

//         case GameStatus.INIT_GAME: {
//           const { gameId, whitePlayer, blackPlayer, timerValue, move, } = message.payload;

//           const isWhite = whitePlayer === username;
//           setColour(isWhite ? 'w' : 'b');
//           setOpponentName(isWhite ? blackPlayer : whitePlayer);

//           setGameId(gameId);
//           setMoves(move ?? []);
//           setStartingTime(timerValue);
//           setWhitePlayerTime(timeInSeconds);
//           setBlackPlayerTime(timeInSeconds);
//           setIsGameStarted(true);
//           setWaitingForOtherPlayer(false);

//           router.replace(`/game?gameId=${gameId}`);
//           break;
//         }

//         case GameStatus.MOVE: {
//           const {move } = message.payload;
//               chess.move(move as Move);         
//           setBoard(chess.board());
//           setFen(chess.fen());
//           initSounds();
//         playOpponentMoveSound();
//           setMoves(prev => [...prev, move as Move]);
//           setCurrentTurn(chess.turn());

//           break;
//         }

//         case GameStatus.GAME_ENDED: {
//           setResult(message.payload.result);
//           if (intervalRef.current) clearInterval(intervalRef.current);
//           break;
//         }
//         case GameStatus.RESTORE_GAME: {
//           const {
//             gameId,
//             whitePlayer,
//             blackPlayer,
//             color,
//             currentFen,
//             remainingTime,
//             moves
//           } = message.payload;

//           const isWhite = color === 'white';
//           setColour(isWhite ? 'w' : 'b');
//           setOpponentName(isWhite ? blackPlayer : whitePlayer);

//           setGameId(gameId);
//           setMoves(moves ?? []);
//           setIsGameStarted(true);

//           chess.load(currentFen);
//           setBoard(chess.board());
//           setFen(currentFen);

//           setWhitePlayerTime(remainingTime.player1 ?? 600);
//           setBlackPlayerTime(remainingTime.player2 ?? 600);

//           router.replace(`/game?gameId=${gameId}`);
//           break;
//         }
//       }
//     };
//   }, [socket, username, chess]);

//   if (!socket) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <h1 className="text-white text-3xl font-bold">Connecting to server ...</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="h-screen w-screen bg-zinc-800">
//       <div className="container mx-auto h-full">
//         <div className="flex xl:h-full flex-col gap-4 xl:flex-row">
//           {/* Board + Timer */}
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
//                 gameStarted={gameStarted}
//               />

//               {/* Player Timer */}
//               <div className="w-full bg-gray-500 p-2 flex justify-between items-center">
//                 <h1>{username}</h1>
//                 <div className="text-4xl">
//                   ⏳ {colour === 'w' ? formatTime(whitePlayerTime) : formatTime(blackPlayerTime)}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Controls */}
//           <div className="xl:w-1/2 flex flex-col gap-4 justify-center items-center">
//             {!gameStarted && !waitingForOtherPlayer && <div className="flex gap-3">
//               <Button onClick={() => setStartingTime(timerValue.TEN_MIN)} className={`border-4 ${startingTime === timerValue.TEN_MIN ? 'border-green-500' : ''}`}>10min</Button>
//               <Button onClick={() => setStartingTime(timerValue.FIFTEEN_MIN)} className={`border-4 ${startingTime === timerValue.FIFTEEN_MIN ? 'border-green-500' : ''}`}>15min</Button>
//               <Button onClick={() => setStartingTime(timerValue.THIRTY_MIN)} className={`border-4 ${startingTime === timerValue.THIRTY_MIN ? 'border-green-500' : ''}`}>30min</Button>
//             </div>}

//             {!gameStarted && !waitingForOtherPlayer && (
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

//             {!result && gameStarted && (
//               <div className="text-white text-xl">
//                 Game started. You are playing as <b>{colour === 'w' ? 'White' : 'Black'}</b>.
//               </div>
//             )}
//             {!gameStarted && waitingForOtherPlayer && <div>
//                 Please wait for the opponent ..
//               </div>}
//               {!result && gameStarted && (
//                 <div>
//                   <Button onClick={() => {
//                     socket.send(JSON.stringify({
//                       type:GameStatus.RESIGN,
//                       payload:{
//                         gameId  
//                       }
//                     }))
//                   }} variant='destructive'>Resign</Button>
//                 </div>
//               )}
//               {result && (
//                 <div>
//                   {result === GameResult.BLACK_WON ? 'Black has won the game' : result === GameResult.DRAW ? 'Match Drawn' : 'White has won the game'}
//                 </div>
//               )}
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
import { GameResult, GameStatus, messageSentByClient, messageSentByServer, timerValue } from '@repo/common'
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { Chess, Move } from "chess.js";
import { useRouter, useSearchParams } from "next/navigation";
import { initSounds, playOpponentMoveSound } from "@/lib/sound";

const Page = () => {
  const socket = useSocket();
  const searchParams = useSearchParams();
  const router = useRouter();
  const gameIdFromUrl = searchParams.get('gameId');

  const [chess] = useState(new Chess());
  const [board, setBoard] = useState(chess.board());
  const [fen, setFen] = useState(chess.fen());

  const [startingTime, setStartingTime] = useState<timerValue>(timerValue.TEN_MIN);
  const [username, setUsername] = useState<string | undefined>(Cookies.get('username'));
  const [colour, setColour] = useState<'w' | 'b'>('w');
  const [moves, setMoves] = useState<Move[]>([]);
  const [result, setResult] = useState<GameResult | null>(null);
  const [gameId, setGameId] = useState('');
  const [gameStarted, setIsGameStarted] = useState(false);
  const [opponentName, setOpponentName] = useState('Guest');
  const [waitingForOtherPlayer, setWaitingForOtherPlayer] = useState(false);

  const timeInSeconds = {
    [timerValue.TEN_MIN]: 600,
    [timerValue.FIFTEEN_MIN]: 900,
    [timerValue.THIRTY_MIN]: 1800
  }[startingTime];

  const [whitePlayerTime, setWhitePlayerTime] = useState(timeInSeconds);
  const [blackPlayerTime, setBlackPlayerTime] = useState(timeInSeconds);
  const [currentTurn, setCurrentTurn] = useState<'w' | 'b'>('w');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if(result){
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
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
  }, [moves, gameStarted, result,chess.turn()]); // ❌ removed chess here

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  useEffect(() => {
    if (!socket || !gameIdFromUrl) return;

    const restoreGame = () => {
      socket.send(JSON.stringify({
        type: GameStatus.RESTORE_GAME,
        payload: { gameId: gameIdFromUrl, username }
      }));
    };

    if (socket.readyState === WebSocket.OPEN) restoreGame();
    else {
      socket.addEventListener('open', restoreGame);
      return () => socket.removeEventListener('open', restoreGame);
    }
  }, [socket, gameIdFromUrl]);

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (event) => {
      const message: messageSentByServer = JSON.parse(event.data);
      switch (message.type) {
        case GameStatus.GAME_ADDED:
          setWaitingForOtherPlayer(true);
          break;
        case GameStatus.INIT_GAME: {
          const { gameId, whitePlayer, blackPlayer, timerValue, move } = message.payload;
          const isWhite = whitePlayer === username;
          setColour(isWhite ? 'w' : 'b');
          setOpponentName(isWhite ? blackPlayer : whitePlayer);
          setGameId(gameId);
          setMoves(move ?? []);
          setStartingTime(timerValue);
          setWhitePlayerTime(timeInSeconds);
          setBlackPlayerTime(timeInSeconds);
          setIsGameStarted(true);
          setWaitingForOtherPlayer(false);
          router.replace(`/game?gameId=${gameId}`);
          break;
        }
        case GameStatus.MOVE: {
          const { move } = message.payload;
          chess.move(move as Move);
          setBoard(chess.board());
          setFen(chess.fen());
          initSounds();
          playOpponentMoveSound();
          setMoves(prev => [...prev, move as Move]);
          setCurrentTurn(chess.turn());
          break;
        }
        case GameStatus.GAME_ENDED:
          setResult(message.payload.result);
          if (intervalRef.current) clearInterval(intervalRef.current);
          break;
        case GameStatus.RESTORE_GAME: {
          const { gameId, whitePlayer, blackPlayer, color, currentFen, remainingTime, moves } = message.payload;
          const isWhite = color === 'white';
          setColour(isWhite ? 'w' : 'b');
          setOpponentName(isWhite ? blackPlayer : whitePlayer);
          setGameId(gameId);
          setMoves(moves ?? []);
          setIsGameStarted(true);
          chess.load(currentFen);
          setBoard(chess.board());
          setFen(currentFen);
          setWhitePlayerTime(remainingTime.player1 ?? 600);
          setBlackPlayerTime(remainingTime.player2 ?? 600);
          router.replace(`/game?gameId=${gameId}`);
          break;
        }
      }
    };
  }, [socket, username]);

  if (!socket) {
    return (
      <div className="flex justify-center items-center h-screen bg-zinc-900">
        <h1 className="text-white text-3xl font-semibold animate-pulse">Connecting to server...</h1>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-zinc-900 to-black text-white">
      <div className="container mx-auto h-full p-4 flex flex-col xl:flex-row gap-6">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-center gap-6">
          <div className="w-full max-w-sm bg-zinc-800 rounded-2xl shadow-lg p-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">{opponentName}</h2>
            <span className="text-2xl">⏳ {colour === 'w' ? formatTime(blackPlayerTime) : formatTime(whitePlayerTime)}</span>
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

          <div className="w-full max-w-sm bg-zinc-800 rounded-2xl shadow-lg p-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">{username}</h2>
            <span className="text-2xl">⏳ {colour === 'w' ? formatTime(whitePlayerTime) : formatTime(blackPlayerTime)}</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full xl:w-96 flex flex-col justify-center items-center gap-6 bg-zinc-800 rounded-2xl shadow-2xl p-6">
          {!gameStarted && !waitingForOtherPlayer && (
            <>
              <div className="flex gap-4">
                {[timerValue.TEN_MIN, timerValue.FIFTEEN_MIN, timerValue.THIRTY_MIN].map((t) => (
                  <Button
                    key={t}
                    onClick={() => setStartingTime(t)}
                    className={`px-4 py-2 rounded-xl text-white font-semibold transition ${
                      startingTime === t ? 'bg-green-600' : 'bg-zinc-700 hover:bg-zinc-600'
                    }`}
                  >
                    {t === timerValue.TEN_MIN ? '10 min' : t === timerValue.FIFTEEN_MIN ? '15 min' : '30 min'}
                  </Button>
                ))}
              </div>
              <Button
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition"
                onClick={() => {
                  socket.send(JSON.stringify({
                    type: GameStatus.INIT_GAME,
                    payload: { timerValue: startingTime }
                  }));
                }}
              >
                Start a Game
              </Button>
            </>
          )}

          {waitingForOtherPlayer && (
            <p className="text-xl font-medium animate-pulse">Waiting for opponent to join...</p>
          )}

          {gameStarted && !result && (
            <>
              <p>You are playing as <b>{colour === 'w' ? 'White' : 'Black'}</b>.</p>
              <Button
                variant="destructive"
                onClick={() => {
                  socket.send(JSON.stringify({
                    type: GameStatus.RESIGN,
                    payload: { gameId }
                  }));
                }}
              >
                Resign
              </Button>
            </>
          )}

          {result && (
            <div className="text-center text-xl font-semibold">
              {result === GameResult.BLACK_WON
                ? '🖤 Black has won the game'
                : result === GameResult.DRAW
                ? '🤝 Match Drawn'
                : '🤍 White has won the game'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
