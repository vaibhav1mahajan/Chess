// import { Move } from "chess.js"

// const MovesTable = ({moves}:{ moves : Move[]}) => {
//   return (
//     <div className="w-full h-full p-5 flex flex-col overflow-scroll">
//       <h1 className="text-center font-bold text-zinc-200">Moves</h1>
//       <div className='flex justify-center border-b py-2  gap-3'>
//         <div className='text-xl text-center'>From</div>
//         <div className='text-xl text-center'>To</div>
//         </div>
//         {moves.map((move,index)=>{
//             return(
//                 <div key={index} className={`${index%2==0 ? 'bg-slate-500' : 'bg-slate-800'} grid grid-cols-2 border-[0.5px] border-white  py-2  gap-3`}>
//                 <div className='text-xl text-center'>{move.from}</div>
//                 <div className='text-xl text-center'>{move.to}</div>
//                 </div>
//             )
//         })}
//     </div>
//   )
// }

// export default MovesTable


import { Move } from "chess.js";

const MovesTable = ({ moves }: { moves: Move[] }) => {
  return (
    <div className="w-full h-full p-6 overflow-auto bg-zinc-900 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-white mb-6 tracking-wide">
        Game Moves
      </h2>
      <div className="w-full">
        <div className="grid grid-cols-3 px-4 py-3 bg-zinc-800 rounded-t-md text-sm font-medium text-zinc-300 uppercase tracking-wider">
          <div>#</div>
          <div className="text-center">From</div>
          <div className="text-center">To</div>
        </div>
        <div className="divide-y divide-zinc-700">
          {moves.map((move, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 px-4 py-3 ${
                index % 2 !== 0 ? "bg-zinc-800" : "bg-zinc-700"
              } hover:bg-zinc-600 transition-all duration-200`}
            >
              <div className="text-zinc-300">{index + 1}</div>
              <div className="text-center text-zinc-100 font-mono">{move.from}</div>
              <div className="text-center text-zinc-100 font-mono">{move.to}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovesTable;
