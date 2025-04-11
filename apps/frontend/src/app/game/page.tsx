import ChessBoard from "@/components/ChessBoard"


const page = () => {
  return (
    <div className="h-screen w-screen bg-zinc-800">
      <div className="container mx-auto h-full">
      <div className="flex h-full ">
        <div className="xl:w-1/2 flex flex-col xl:flex-row xl:justify-center h-full items-center  w-full"> 
            {/* <div className="w-[700px] h-[700px] bg-white"></div> */}
            <ChessBoard />
        </div>
        <div className="xl:w-1/2"></div>
      </div>

      </div>
      
    </div>
  )
}

export default page
