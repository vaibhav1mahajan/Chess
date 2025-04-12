"use client";
import { GameStatus } from "@repo/common";
import { Chess, Color, Move, PieceSymbol, Square } from "chess.js";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { initSounds, playErrorSound, playMyMoveSound } from '@/lib/sound';

const ChessBoard = ({
  gameId,
  colour,
  setColour,
  whitePlayerTime,
  blackPlayerTime,
  chess,
  board,
  setBoard,
  socket,
  gameStarted
}: {
  colour: string;
  setColour: Dispatch<SetStateAction<"w" | "b">>;
  whitePlayerTime: number;
  blackPlayerTime: number;
  chess: Chess;
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][];
  setBoard: Dispatch<SetStateAction<(({ square: Square; type: PieceSymbol; color: Color; } | null)[][])>>;
  socket: WebSocket;
  gameId: string;
  gameStarted: boolean;
}) => {
  const [from, setFrom] = useState<string | null>(null);
  const [to, setTo] = useState<string | null>(null);
  const [moves, setMoves] = useState<Move[] | []>([]);

  const [isPremoved, setIsPremoved] = useState(false);
  const [premoveFrom, setIspremoveFrom] = useState<string | null>(null);
  const [premoveTo, setIspremoveTo] = useState<string | null>(null);

  useEffect(() => {
    if (!isPremoved || !premoveFrom || !premoveTo) return;
    try {
      chess.move({ from: premoveFrom, to: premoveTo });
      socket.send(
        JSON.stringify({
          type: GameStatus.MOVE,
          payload: {
            gameId,
            move: { from: premoveFrom, to: premoveTo },
          },
        })
      );
      setBoard(chess.board());
      setFrom(null);
      setTo(null);
    } catch (error) {
      console.log('Invalid move', error);
    }
  }, [board]);

  const setFromAndPlaySound = (i: number, j: number) => {
    const newFrom = `${String.fromCharCode(j + 97)}${i}`;
    setFrom(newFrom);
    const moves = chess.moves({ square: newFrom as Square, verbose: true });
    setMoves(moves);
    initSounds();
    playMyMoveSound();
    setTo(null);
  };

  return (
<div className="w-full max-w-[90vmin] lg:max-w-[600px] xl:max-w-[700px] aspect-square grid grid-cols-8 mx-auto gap-0 border-4 border-gray-600 rounded-md shadow-xl">
      {(colour === "b" ? board.slice().reverse() : board).map((row, i) => {
        const rowIndex = colour === "b" ? i + 1 : 8 - i;
        return (colour === "b" ? row.slice().reverse() : row).map((square, j) => {
          const colIndex = colour === "b" ? 7 - (j % 8) : j % 8;
          const squareName = `${String.fromCharCode(colIndex + 97)}${rowIndex}`;
          const isDark = (rowIndex + colIndex) % 2 !== 0;
          const canMove = checkPossibleMove(moves, squareName as Square, from);

          return (
            <div
              key={`${i}-${j}`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                if (!gameStarted) return;
                const fromSquare = e.dataTransfer.getData("fromSquare");
                if (fromSquare && squareName) {
                  try {
                    chess.move({ from: fromSquare, to: squareName });
                    socket.send(JSON.stringify({
                      type: GameStatus.MOVE,
                      payload: { gameId, move: { from: fromSquare, to: squareName } }
                    }));
                    setBoard(chess.board());
                    setFrom(null);
                    setTo(null);
                  } catch (error) {
                    console.log("Invalid move", error);
                  }
                }
              }}
              onClick={() => {
                if (!gameStarted || colour.charAt(0) !== chess.turn().charAt(0)) return;

                if (square && square.color === chess.turn() && from) {
                  setFromAndPlaySound(rowIndex, colIndex);
                } else if (!from) {
                  setFromAndPlaySound(rowIndex, colIndex);
                } else if (from && !to) {
                  const newTo = squareName;
                  setTo(newTo);
                  try {
                    chess.move({ from: from, to: newTo });
                  } catch (error) {
                    initSounds();
                    playErrorSound();
                    console.log("Invalid move", error);
                  }
                  socket.send(JSON.stringify({
                    type: GameStatus.MOVE,
                    payload: { gameId, move: { from: from, to: newTo } }
                  }));
                  setFrom(null);
                  setTo(null);
                  setBoard(chess.board());
                }
              }}
              className={`relative w-full aspect-square flex items-center justify-center 
                ${isDark ? "bg-[#769656]" : "bg-[#eeeed2]"} 
                border border-gray-500`}
            >
              {canMove && (
                <div className="absolute z-10 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-400 opacity-70" />
              )}
              {square && (
                <Image
                  draggable
                  onDragStart={(e) => {
                    e.dataTransfer.setData('fromSquare', squareName);
                    setFrom(squareName);
                    const possibleMoves = chess.moves({ square: squareName as Square, verbose: true });
                    setMoves(possibleMoves);
                  }}
                  src={`/Chess_pieces/${square.color.toUpperCase()}${square?.type.toUpperCase()}.png`}
                  alt={`${square?.type}`}
                  width={40}
                  height={40}
                  className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12"
                />
              )}
            </div>
          );
        });
      })}
    </div>
  );
};

function checkPossibleMove(
  moves: Move[] | [],
  square: Square,
  from: string | null
) {
  if (from) {
    return moves.some((move) => move.to === square);
  }
  return false;
}

export default ChessBoard;
