'use client'
import { GameStatus } from '@repo/common';
import {Chess, Color, Move, PieceSymbol, Square} from 'chess.js'
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react'
const ChessBoard = ({colour , setColour , whitePlayerTime , blackPlayerTime , chess ,board , setBoard ,socket}:{
  colour: string,
  setColour:Dispatch<SetStateAction<string>>,
  whitePlayerTime:number,
  blackPlayerTime:number,
  chess:Chess,
  board:  ({
    square: Square;
    type: PieceSymbol;
    color: Color;
} | null)[][],
  setBoard:Dispatch<SetStateAction<({
    square: Square;
    type: PieceSymbol;
    color: Color;
} | null)[][]>>,
socket : WebSocket
}) => {
    const [from,setFrom] = useState<string | null>(null);
    const [to,setTo] = useState<string | null >(null);
    const [moves,setMoves] = useState<Move[] | []>([]);
    
    console.log(chess),
    console.log(board)
  return (
    <div className='mt-10'>
      {(colour==='b' || colour==='black' ? board.slice().reverse() : board).map((row, i) => {
        return (
            <div key={i} className="flex items-center justify-center h-[40px] sm:h-[70px] xl:h-[90px] ">
              {row.map((square, j) => {
                const piece = board[i][j] || null;
                return (
                  <div
                    onClick={()=>{
                        if(!from &&!to || piece?.color === chess.turn()){
                            let newFrom = `${String.fromCharCode(j + 97)}${8-i}`;
                
                            setFrom(newFrom);
                             console.log('new from ',newFrom);
                             const moves = chess.moves({square:newFrom as Square , verbose:true})
                             console.log(moves);
                             setMoves(moves);
                             setTo(null);
                        } else if(from &&!to){
                            let newTo = `${String.fromCharCode(j + 97)}${8-i}`;
                            setTo(newTo);
                            console.log('new to',newTo);
                            try {
                                chess.move({from: from, to: newTo});
                            } catch (error) {
                                console.error('Invalid move', error);
                            }
                              
                            socket.send(JSON.stringify({
                              type:GameStatus.MOVE,
                              payload:{
                                
                              }
                            }))
                            
                            setFrom(null);
                            setTo(null);
                            console.log('after move')
                            setBoard(chess.board());
                        } 
                    }}
                    key={j}
                    className={`flex justify-center items-center  p-0 h-[40px] w-[40px] sm:w-[70px] sm:h-[70px] xl:h-[90px] xl:w-[90px] border-2 border-gray-400 ${(i+j)%2 !== 0? 'bg-blue-400' : 'bg-gray-50'} cursor="pointer" relative`}
                  >
                    <div className={`absolute ${checkPossibleMove(moves,`${String.fromCharCode(j + 97)}${8-i}` as Square,from) === true ? 'block' : 'hidden'} w-5 h-5 rounded-full bg-green-300 block z-50`}></div>
                   {square && <Image src={`/Chess_pieces/${piece?.color.toUpperCase()}${piece?.type.toUpperCase()}.png`} alt={`${piece?.type.toString()}`} height={35} width={35} className='h-5 w-5 sm:h-10 sm:w-10 xl:w-12 xl:h-12' />}
                  </div>
                )
              })}
            </div>
        )
      })}

    </div>
  )
}


function checkPossibleMove (moves: Move[] | [], square : Square, from :string | null){
    if(from){
       for(let i =0;i<moves.length;i++){
        if(moves[i].to === square ){
            return true;
        }
    } 
    }
    
    return false;
}

export default ChessBoard
