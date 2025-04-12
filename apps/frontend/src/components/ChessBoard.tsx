'use client'
import { initSounds, playErrorSound, playMyMoveSound } from '@/lib/sound';
import { GameStatus } from '@repo/common';
import { Chess, Color, Move, PieceSymbol, Square } from 'chess.js'
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react'
const ChessBoard = ({ gameId, colour, setColour, whitePlayerTime, blackPlayerTime, chess, board, setBoard, socket }: {
  colour: string,
  setColour: Dispatch<SetStateAction<string>>,
  whitePlayerTime: number,
  blackPlayerTime: number,
  chess: Chess,
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][],
  setBoard: Dispatch<SetStateAction<({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][]>>,
  socket: WebSocket,
  gameId: string
}) => {
  const [from, setFrom] = useState<string | null>(null);
  const [to, setTo] = useState<string | null>(null);
  const [moves, setMoves] = useState<Move[] | []>([]);

  const setFromAndPlaySound = (i: number, j: number) => {
    const newFrom = `${String.fromCharCode(j + 97)}${i}`;
    setFrom(newFrom);
    const moves = chess.moves({ square: newFrom as Square, verbose: true, },)
    console.log('from', from)
    setMoves(moves);
    initSounds();
    playMyMoveSound();
    setTo(null);
  }


  return (
    <div className='mt-10'>
      {(colour === 'b' || colour === 'black' ? board.slice().reverse() : board).map((row, i) => {
        i = colour === 'b' || colour === 'black' ? i + 1 : 8 - i;
        return (
          <div key={i} className="flex items-center justify-center h-[40px] sm:h-[70px] xl:h-[90px] ">
            {(colour === 'b' || colour === 'black' ? row.slice().reverse() : row).map((square, j) => {
              j = colour === 'b' || colour === 'black' ? 7 - (j % 8) : (j % 8);

              return (
                <div
                  onClick={() => {
                    if (colour.charAt(0) != chess.turn().charAt(0)) {
                      console.log('returning because not allowed to move');
                      // not allowed to move sound
                      return;
                    };

                    if (square && square.color === chess.turn() && from) {
                      setFromAndPlaySound(i, j)
                    } else if (!from) {
                      //   let newFrom = `${String.fromCharCode(j + 97)}${i}`;

                      //     setFrom(newFrom);

                      //      const moves = chess.moves({square:newFrom as Square , verbose:true,},)
                      //       console.log('from',from)
                      //      setMoves(moves);
                      //      setTo(null);
                      setFromAndPlaySound(i, j)
                    } else if (from && !to) {
                      const newTo = `${String.fromCharCode(j + 97)}${i}`;;
                      setTo(newTo);
                      console.log('newTO', newTo)
                      try {
                        chess.move({ from: from, to: newTo });
                        // add sound
                      } catch (error) {
                        initSounds();
                        playErrorSound();
                        console.error('Invalid move', error);
                        // add error sound
                      }
                      console.log(newTo)
                      socket.send(JSON.stringify({
                        type: GameStatus.MOVE,
                        payload: {
                          gameId,
                          move: { from: from, to: newTo }
                        }
                      }))

                      setFrom(null);
                      setTo(null);

                      setBoard(chess.board());
                    }
                  }}
                  key={j}
                  className={`flex justify-center items-center  p-0 h-[40px] w-[40px] sm:w-[70px] sm:h-[70px] xl:h-[90px] xl:w-[90px] border-2 border-gray-400 ${(i + j) % 2 !== 0 ? 'bg-blue-400' : 'bg-gray-50'} cursor="pointer" relative`}
                >
                  <div className={`absolute ${checkPossibleMove(moves, `${String.fromCharCode(j + 97)}${i}` as Square, from) === true ? 'block' : 'hidden'} w-5 h-5 rounded-full bg-green-300 block z-50`}></div>
                  {square && <Image src={`/Chess_pieces/${square.color.toUpperCase()}${square?.type.toString().toUpperCase()}.png`} alt={`${square?.type.toString()}`} height={35} width={35} className='h-5 w-5 sm:h-10 sm:w-10 xl:w-12 xl:h-12' />}
                </div>
              )
            })}
          </div>
        )
      })}

    </div>
  )
}


function checkPossibleMove(moves: Move[] | [], square: Square, from: string | null) {
  if (from) {
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].to === square) {
        return true;
      }
    }
  }

  return false;
}

export default ChessBoard


