'use client'
import {Chess} from 'chess.js'
import Image from 'next/image';
import { useState } from 'react'
const ChessBoard = () => {
    const [chess,setChess] = useState(new Chess());
    const [board,setBoard] = useState(chess.board());

    console.log(chess.board())
  return (
    <div className='mt-10'>
      {board.map((row, i) => {
        return (
            <div key={i} className="flex items-center justify-center h-[40px] sm:h-[70px] xl:h-[90px] ">
              {row.map((square, j) => {
                const piece = board[i][j] || null;
                return (
                  <div
                    key={j}
                    className={`flex justify-center items-center  p-0 h-[40px] w-[40px] sm:w-[70px] sm:h-[70px] xl:h-[90px] xl:w-[90px] border-2 border-gray-400 ${(i+j)%2 !== 0? 'bg-blue-400' : 'bg-gray-50'} cursor="pointer"`}
                  >
                    
                   {piece && <Image src={`/Chess_pieces/${piece?.color.toUpperCase()}${piece?.type.toUpperCase()}.png`} alt={`${piece?.type.toString()}`} height={35} width={35} className='h-5 w-5 sm:h-10 sm:w-10 xl:w-12 xl:h-12' />}
                  </div>
                )
              })}
            </div>
        )
      })}

    </div>
  )
}

export default ChessBoard
